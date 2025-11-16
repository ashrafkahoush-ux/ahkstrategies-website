import { ArrowRight, Brain, Lightbulb, Target, Users, Rocket, Award } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Pillars | AHKStrategies",
  description: "The six foundational pillars that power AHKStrategies' strategic intelligence and business operations.",
};

export default function PillarsPage() {
  const pillars = [
    {
      title: "Human Intelligence",
      href: "/pillars/human-intelligence",
      icon: Brain,
      description: "Deep market expertise, cultural intelligence, and strategic foresight from our human analysts.",
      color: "from-blue-500 to-cyan-600",
      available: true
    },
    {
      title: "Innovation & Technology",
      href: "/pillars/innovation",
      icon: Lightbulb,
      description: "Cutting-edge AI systems, digital transformation, and technological integration across operations.",
      color: "from-purple-500 to-pink-600",
      available: true
    },
    {
      title: "Vision & Strategy",
      href: "/pillars/vision",
      icon: Target,
      description: "Long-term strategic planning, scenario analysis, and visionary leadership across sectors.",
      color: "from-emerald-500 to-teal-600",
      available: true
    },
    {
      title: "Projects & Execution",
      href: "/pillars/projects",
      icon: Rocket,
      description: "Multi-sector project portfolio spanning automotive, digital, renewable energy, and trade.",
      color: "from-amber-500 to-orange-600",
      available: true
    },
    {
      title: "Legacy & Heritage",
      href: "/pillars/legacy",
      icon: Award,
      description: "Decades of industrial expertise, established partnerships, and proven track record.",
      color: "from-rose-500 to-red-600",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Strategic Foundation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Six Strategic Pillars
              </span>
              <br />
              <span className="text-slate-100">Powering Excellence</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The foundational elements that drive AHKStrategies' success across multiple sectors, 
              combining human expertise with artificial intelligence, legacy with innovation.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.href}
                  href={pillar.href}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className={`bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                        Explore Pillar
                      </span>
                      <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Philosophy Section */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Where Human Intuition and Artificial Intelligence Move as One</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Each pillar represents a critical dimension of our strategic approach. Together, they form an integrated 
                  system that leverages both human expertise and AI capabilities to deliver exceptional results across 
                  automotive, digital, renewable energy, and trade sectors.
                </p>
                <Link 
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
