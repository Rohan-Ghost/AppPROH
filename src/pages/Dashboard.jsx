import React from 'react'
import { Activity, Zap, Cpu, Users, CreditCard, BarChart2, TrendingUp, Clock, Server } from 'lucide-react'

export default function Dashboard() {
  const metrics = [
    { title: 'Insights (ILU)', value: '14,290', change: '+18.4%', icon: Activity, color: 'text-purple-400' },
    { title: 'Avg Latency (L)', value: '128ms', change: '-12.3%', icon: Zap, color: 'text-green-400' },
    { title: 'Token Usage (U)', value: '1.42M', change: '+24.1%', icon: Cpu, color: 'text-orange-400' },
    { title: 'Active Subscriptions', value: '482', change: '+8.2%', icon: CreditCard, color: 'text-blue-400' },
  ]

  const recentLogs = [
    { id: 'log_1', time: '10:42:12', event: 'App Generated (Lovable)', latency: '1.74s', status: '200 OK' },
    { id: 'log_2', time: '10:41:55', event: 'Autocomplete Prediction (Emergent)', latency: '98ms', status: '200 OK' },
    { id: 'log_3', time: '10:40:02', event: 'Stripe Webhook (Zappora)', latency: '310ms', status: '200 OK' },
    { id: 'log_4', time: '10:38:14', event: 'RAG Vector Query (pgvector)', latency: '45ms', status: '200 OK' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white flex items-center space-x-3">
          <span>AppPROH SaaS Analytics</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-orange-950 text-orange-400 border border-orange-800 font-mono">
            ILU Framework
          </span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Monitoring platform Insights, Latency, and Usage across Lovable, Emergent, and Zappora pipelines.
        </p>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon
          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{m.title}</span>
                <Icon className={`w-5 h-5 ${m.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{m.value}</div>
              <div className="text-xs text-green-400 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 inline" />
                <span>{m.change} vs last week</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main dashboard content: Latency Chart mock & Platform Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center space-x-2">
              <BarChart2 className="w-5 h-5 text-purple-400" />
              <span>Real-Time Latency & Token Flow (p95 / p99)</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Live Stream</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg h-64 p-4 flex flex-col justify-end space-y-2">
            <div className="flex items-end space-x-3 h-48 justify-between px-4">
              {[40, 65, 30, 85, 45, 95, 70, 55, 80, 60, 90, 75, 50, 68].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center space-y-1 group">
                  <div
                    style={{ height: `${val}%` }}
                    className="w-full bg-gradient-to-t from-purple-600 via-green-500 to-orange-500 rounded-t transition-all group-hover:opacity-80"
                  />
                  <span className="text-[9px] font-mono text-slate-500">{i + 1}h</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-500 border-t border-slate-800 pt-2 font-mono">
              <span className="text-purple-400">Emergent: ~110ms</span>
              <span className="text-green-400">Lovable: ~1.8s</span>
              <span className="text-orange-400">Zappora: ~220ms</span>
            </div>
          </div>
        </div>

        {/* Server status & infrastructure */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
          <h3 className="font-bold text-white flex items-center space-x-2">
            <Server className="w-5 h-5 text-green-400" />
            <span>Infrastructure Health</span>
          </h3>

          <div className="space-y-3">
            {[
              { name: 'K8s Cluster (US-East)', status: 'Healthy', latency: '12ms', color: 'bg-green-500' },
              { name: 'pgvector Database', status: 'Healthy', latency: '4ms', color: 'bg-green-500' },
              { name: 'Redis L2 Caching', status: 'Healthy', latency: '1ms', color: 'bg-green-500' },
              { name: 'Stripe API Gateway', status: 'Operational', latency: '140ms', color: 'bg-green-500' },
              { name: 'Docker Code Interpreter', status: 'Active (12 pods)', latency: '85ms', color: 'bg-purple-500' },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${s.color}`} />
                  <span className="font-medium text-slate-200">{s.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 font-mono">{s.status}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{s.latency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
        <h3 className="font-bold text-white flex items-center space-x-2">
          <Clock className="w-5 h-5 text-orange-400" />
          <span>Recent Execution Logs</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950 text-slate-400 uppercase border-b border-slate-800">
              <tr>
                <th className="p-3">Log ID</th>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Event Pipeline</th>
                <th className="p-3">Latency</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {recentLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 text-purple-400">{log.id}</td>
                  <td className="p-3 text-slate-400">{log.time}</td>
                  <td className="p-3 font-semibold text-slate-200">{log.event}</td>
                  <td className="p-3 text-green-400">{log.latency}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-green-950 text-green-400 border border-green-800">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
