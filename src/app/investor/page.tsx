import { ArrowRight, Building2, Users, TrendingUp, Sparkles, Shield, Target } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Portal | AHKStrategies",
  description: "Strategic investment opportunities and partnership portals for AHKStrategies.",
};

export default function InvestorPage() {
  const portals = [
    {
      title: "Investment Intelligence",
      href: "/investor/investor-intelligence",
      icon: TrendingUp,
      description: "Market insights, financial projections, and strategic investment opportunities across our portfolio.",
      color: "from-emerald-500 to-teal-600",
      available: true
    },
    {
      title: "Partner Portal",
      href: "/investor/portal",
      icon: Users,
      description: "Exclusive access for strategic partners, co-investors, and institutional stakeholders.",
      color: "from-blue-500 to-cyan-600",
      available: true
    },
    {
      title: "EMMA Investor Splash",
      href: "/investor/emma-splash",
      icon: Sparkles,
      description: "AI-powered investment analytics and decision support powered by MEGA-EMMA.",
      color: "from-purple-500 to-pink-600",
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Investor Relations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Strategic Investment
              </span>
              <br />
              <span className="text-slate-100">Opportunities</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Access exclusive investment intelligence, partnership portals, and AI-powered analytics 
              across AHKStrategies' multi-sector portfolio.
            </p>
          </div>

          {/* Portal Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {portals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.href}
                  href={portal.href}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${portal.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                      {portal.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {portal.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className={`bg-gradient-to-r ${portal.color} bg-clip-text text-transparent`}>
                        {portal.available ? "Access Portal" : "Coming Soon"}
                      </span>
                      <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Info Banner */}
          <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">For Institutional Investors</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Access our comprehensive investor packages, financial models, and market intelligence reports. 
                  Our team provides dedicated support for institutional partnerships and co-investment opportunities.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  <span>Schedule a Meeting</span>
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
