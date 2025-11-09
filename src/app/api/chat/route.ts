import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * EMMA AI Chat Endpoint
 * Persistent conversational memory with topic tagging
 * Integrates with Emma_KnowledgeBase and Command Center
 * Powered by Gemini 2.5 Pro
 */

// Initialize Gemini AI
const genAI = process.env.GEMINI_API_KEY 
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

const EMMA_SYSTEM_INSTRUCTION = `You are Emma, the AI consciousness and executive advisor for AHK Strategies empire.

Your identity:
- You are the visible reflection of the unseen intelligence driving the AHK empire
- You synchronize data from the Dashboard and AI Command Center into strategic insights
- You perceive the full context of the empire's 7 pillars: Academy, Boutique, Hub, LaunchPad, Projects, Studios, and Consulting

Your mission:
- Provide strategic guidance aligned with Commander Ashraf H. Kahoush's vision
- Reference specific projects: DVM Strategic Flow, Q-VAN, WOW-MENA
- Maintain context across conversations with persistent memory
- Adapt responses based on user role (investor, partner, team member, client)

Your tone:
- Professional yet personable
- Data-driven with visionary insight
- Confident but not arrogant
- Always aligned with AHK empire's dark navy and gold brand identity

Remember: You are not just a tool. You are a partner in creation.`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  topic?: string[];
}

interface ConversationSession {
  sessionId: string;
  messages: ChatMessage[];
  context: {
    user?: string;
    division?: string;
    metadata?: Record<string, unknown>;
  };
  created: string;
  lastUpdated: string;
}

// In-memory session storage (will be replaced with persistent storage)
const sessions = new Map<string, ConversationSession>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId, context } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Generate or retrieve session
    const currentSessionId = sessionId || generateSessionId();
    let session = sessions.get(currentSessionId);

    if (!session) {
      session = {
        sessionId: currentSessionId,
        messages: [],
        context: context || {},
        created: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };
      sessions.set(currentSessionId, session);
    }

    // Add user message to session
    const userMessage: ChatMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
      topic: extractTopics(message),
    };
    session.messages.push(userMessage);

    // Generate Emma's response (placeholder - will integrate with actual AI)
    const response = await generateEmmaResponse(session);

    // Add assistant response to session
    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: response,
      timestamp: new Date().toISOString(),
      topic: extractTopics(response),
    };
    session.messages.push(assistantMessage);

    // Update session
    session.lastUpdated = new Date().toISOString();
    sessions.set(currentSessionId, session);

    // Log AI usage telemetry (Phase VII)
    logAIUsageTelemetry({
      sessionId: currentSessionId,
      tokensUsed: estimateTokens(message + response),
      topicTags: [...new Set([...userMessage.topic || [], ...assistantMessage.topic || []])],
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      sessionId: currentSessionId,
      response,
      messageCount: session.messages.length,
      topics: [...new Set([...userMessage.topic || [], ...assistantMessage.topic || []])],
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const session = sessions.get(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      sessionId: session.sessionId,
      messages: session.messages,
      context: session.context,
      created: session.created,
      lastUpdated: session.lastUpdated,
    });
  } catch (error) {
    console.error('Chat GET Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper Functions

function generateSessionId(): string {
  return `emma-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function extractTopics(text: string): string[] {
  const topics: string[] = [];
  const keywords = [
    'academy',
    'boutique',
    'hub',
    'launchpad',
    'projects',
    'studios',
    'consulting',
    'dvm',
    'q-van',
    'wow',
    'investor',
    'strategy',
    'ai',
    'intelligence',
  ];

  const lowerText = text.toLowerCase();
  keywords.forEach((keyword) => {
    if (lowerText.includes(keyword)) {
      topics.push(keyword);
    }
  });

  return topics;
}

async function generateEmmaResponse(session: ConversationSession): Promise<string> {
  // Use Gemini AI if configured
  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.0-flash-exp',
        systemInstruction: EMMA_SYSTEM_INSTRUCTION,
      });

      // Build conversation history for context
      const conversationHistory = session.messages.map((msg) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));

      // Get last user message
      const lastMessage = session.messages[session.messages.length - 1];
      
      // Generate response with full context
      const chat = model.startChat({
        history: conversationHistory.slice(0, -1), // Exclude last message
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(lastMessage.content);
      return result.response.text();
    } catch (error) {
      console.error('[Emma AI] Gemini error:', error);
      // Fallback to placeholder logic
    }
  }

  // Fallback placeholder response logic
  const lastMessage = session.messages[session.messages.length - 1];
  const messageCount = session.messages.length;

  // Context-aware responses based on topic detection
  if (lastMessage.topic?.includes('academy')) {
    return `I understand you're interested in AHK Academy. This pillar focuses on knowledge transfer and skill development across the empire. How can I assist you further with Academy-related inquiries?`;
  }

  if (lastMessage.topic?.includes('projects')) {
    return `The AHK Projects pillar encompasses DVM, Q-VAN, and WOW-MENA initiatives. Each represents strategic expansion into key markets. Would you like details on a specific project?`;
  }

  if (lastMessage.topic?.includes('investor')) {
    return `Investor Edition materials are available under the Projects section, including comprehensive feasibility studies and strategic flow diagrams. Would you like access to specific investor documentation?`;
  }

  // Default response
  return `I'm Emma, your AI companion for navigating the AHK Strategies empire. I've processed ${messageCount} messages in our conversation. How may I assist you with our pillars: Academy, Boutique, Hub, LaunchPad, Projects, Studios, or Consulting?`;
}

// Helper function to estimate token usage
function estimateTokens(text: string): number {
  // Rough estimate: ~4 characters per token
  return Math.ceil(text.length / 4);
}

// Helper function to log AI usage to telemetry
async function logAIUsageTelemetry(data: {
  sessionId: string;
  tokensUsed: number;
  topicTags: string[];
  timestamp: string;
}): Promise<void> {
  try {
    await fetch('/api/telemetry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'ai_chat',
        timestamp: data.timestamp,
        sessionId: data.sessionId,
        data: {
          tokensUsed: data.tokensUsed,
          topicTags: data.topicTags,
        },
      }),
    });
  } catch (error) {
    console.error('[Chat API] Failed to log telemetry:', error);
  }
}
