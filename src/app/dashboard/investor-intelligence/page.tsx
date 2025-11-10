'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { 
  Activity, TrendingUp, Users, Download, Globe, 
  Clock, Target, Zap 
} from 'lucide-react'

interface AnalyticsData {
  lastUpdated: string
  totalViews: number
  totalDownloads: number
  uniqueVisitors: number
  averageTimeOnPage: string
  conversionRate: string
  topProjects: Array<{
    id: string
    name: string
    views: number
    downloads: number
    conversionRate: string
  }>
  topDomains: Array<{
    domain: string
    visits: number
    downloads: number
    lastSeen: string
  }>
  hourlyEngagement: Array<{
    hour: string
    views: number
    downloads: number
  }>
  conversionFunnel: Array<{
    stage: string
    count: number
    percentage: number
  }>
  emmaSummary: Array<{
    timestamp: string
    insight: string
  }>
}

export default function InvestorIntelligencePage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/investor_studies/investor_analytics_summary.json')
      .then(res => res.json())
      .then(data => {
        setAnalytics(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load analytics:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-red-400">Failed to load analytics data</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">
          Investor Intelligence Dashboard
        </h1>
        <p className="text-slate-400">
          Real-time analytics powered by EMMA • Last updated:{' '}
          {new Date(analytics.lastUpdated).toLocaleString()}
        </p>
      </motion.div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            icon: Activity,
            label: 'Total Views',
            value: analytics.totalViews.toLocaleString(),
            color: '#D4AF37',
          },
          {
            icon: Download,
            label: 'Downloads',
            value: analytics.totalDownloads.toLocaleString(),
            color: '#00D9FF',
          },
          {
            icon: Users,
            label: 'Unique Visitors',
            value: analytics.uniqueVisitors.toLocaleString(),
            color: '#F4E5B1',
          },
          {
            icon: Target,
            label: 'Conversion Rate',
            value: analytics.conversionRate,
            color: '#10b981',
          },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-slate-400 text-sm mb-1">{metric.label}</h3>
            <p className="text-3xl font-bold" style={{ color: metric.color }}>
              {metric.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Heatmap + Top Domains */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Engagement Heatmap */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 bg-[#0f172a] border border-[#1e293b] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-[#D4AF37]">
              Hourly Engagement Heatmap
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.hourlyEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis 
                dataKey="hour" 
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <YAxis 
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #D4AF37',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#D4AF37' }}
              />
              <Legend wrapperStyle={{ color: '#94a3b8' }} />
              <Bar dataKey="views" fill="#D4AF37" name="Views" />
              <Bar dataKey="downloads" fill="#00D9FF" name="Downloads" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Domains */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-[#00D9FF]" />
            <h2 className="text-xl font-bold text-[#00D9FF]">Top Domains</h2>
          </div>
          <div className="space-y-4">
            {analytics.topDomains.map((domain, i) => (
              <div
                key={i}
                className="border-b border-[#1e293b] pb-3 last:border-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="text-slate-300 font-medium text-sm break-all">
                    {domain.domain}
                  </p>
                  <span className="text-[#D4AF37] text-xs whitespace-nowrap ml-2">
                    {domain.visits} visits
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{domain.downloads} downloads</span>
                  <span>
                    {new Date(domain.lastSeen).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Conversion Funnel + Top Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Conversion Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-[#10b981]" />
            <h2 className="text-xl font-bold text-[#10b981]">
              Conversion Funnel
            </h2>
          </div>
          <div className="space-y-4">
            {analytics.conversionFunnel.map((stage, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-medium">{stage.stage}</span>
                  <span className="text-[#D4AF37]">{stage.count}</span>
                </div>
                <div className="w-full bg-[#1e293b] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#10b981] rounded-full"
                  />
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  {stage.percentage}% conversion
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-xl font-bold text-[#D4AF37]">
              Top Projects Performance
            </h2>
          </div>
          <div className="space-y-4">
            {analytics.topProjects.map((project, i) => (
              <div
                key={i}
                className="bg-[#020617] border border-[#1e293b] rounded-lg p-4 hover:border-[#D4AF37]/50 transition-all"
              >
                <h3 className="text-slate-200 font-semibold mb-3">
                  {project.name}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#D4AF37]">
                      {project.views}
                    </p>
                    <p className="text-xs text-slate-500">Views</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#00D9FF]">
                      {project.downloads}
                    </p>
                    <p className="text-xs text-slate-500">Downloads</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#10b981]">
                      {project.conversionRate}
                    </p>
                    <p className="text-xs text-slate-500">Conv. Rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* EMMA Summary Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#D4AF37]/30 rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-[#F4E5B1]" />
          <h2 className="text-xl font-bold text-[#F4E5B1]">
            EMMA Intelligence Feed
          </h2>
          <span className="ml-auto text-xs text-slate-500">
            Live Analytics Summary
          </span>
        </div>
        <div className="space-y-3">
          {analytics.emmaSummary.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="bg-[#020617]/50 border-l-4 border-[#D4AF37] rounded-r-lg p-4 hover:bg-[#020617] transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full mt-2 animate-pulse" />
                <div className="flex-1">
                  <p className="text-slate-300 leading-relaxed">{item.insight}</p>
                  <p className="text-xs text-slate-500 mt-2">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
