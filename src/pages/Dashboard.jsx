import React from 'react'
import { Zap, Server, Shield, CreditCard, Clock, BarChart2, Users, TrendingUp, Mic, Laptop } from 'lucide-react'

export default function Dashboard() {
  const metrics = [
    { title: 'Insights (ILU)', value: '14,290', change: '+18.4%', icon: Laptop, color: 'zappora' },
    { title: 'Avg Latency (L)', value: '128ms', change: '-12.3%', icon: Zap, color: 'zapporaLight' },
    { title: 'Token Usage (U)', value: '1.42M', change: '+24.1%', icon: Cpu, color: 'zapporaLight' },
    { title: 'Active Subscriptions', value: '482', change: '+8.2%', icon: CreditCard, color: 'zappora' },
  ]

  const recentLogs = [
    { id: 'log_1', time: '10:42:12', event: 'Vector query completed', latency: '1.74s', status: '200 OK' },
    { id: 'log_2', time: '10:41:55', event: 'Code generated', latency: '98ms', status: '200 OK' },
    { id: 'log_3', time: '10:40:02', event: 'Subscription synced', latency: '310ms', status: '200 OK' },
    { id: 'log_4', time: '10:38:14', event: 'RAG query completed', latency: '45ms', status: '200 OK' },
  ]

  return (
    <div className="min-h-screen bg-zapporaDark text-zapporaLight p-8">
      <h1 className="text-3xl font-bold text-zappora mb-6">AppPROH Analytics</h1>
      <p className="text-zapporaLight/80 text-base mb-8">
        Zappora SaaS Platform • ILU Framework metrics
      </p>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-zapporaDark/30 rounded-xl p-5 border border-zapporaLight/30 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zapporaLight/60">{m.title}</span>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <div className="text-2xl font-bold text-zapporaLight">{m.value}</div>
            <div className="text-zapporaLight/60 text-sm flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 inline" />
              <span>{m.change} vs last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Latency chart */}
      <div className="bg-zapporaDark/50 rounded-2xl p-6 mb-12">
        <h3 className="text-zapporaLight text-base font-bold mb-4">Latency Flow (p95 / p99)</h3>
        <div className="bg-zapporaDark/50 rounded-lg h-32 p-4 flex flex-col justify-end space-y-2">
          <div className="flex items-end space-x-3 h-24 justify-between px-4">
            {[40, 65, 30, 85, 45, 95, 70, 55, 80, 60, 90, 75, 50, 68].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  style={{ height: `${val}%` }}
                  className="w-full bg-gradient-to-t from-zapporaLight via-zappora to-zapporaDark rounded-t transition-all group-hover:opacity-80"
                />
                <span className="text-[9px] font-mono text-zapporaLight/50">{i + 1}h</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-zapporaLight/50 font-mono">
            <span className="text-zapporaLight">Emergent: ~110ms</span>
            <span className="text-zapporaLight">Lovable: ~1.8s</span>
            <span className="text-zappora">Zappora: ~220ms</span>
          </div>
        </div>
      </div>

      {/* Server status */}
      <div className="bg-zapporaDark/50 rounded-2xl p-6">
        <h3 className="text-zapporaLight font-bold flex items-center space-x-2 mb-4">
          <Server className="w-5 h-5 text-zappora" />
          <span>Infrastructure Health</span>
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-zapporaDark/50 rounded-lg border border-zapporaLight/30 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full zapporaDark" />
              <span className="font-medium text-zapporaLight">K8s Cluster (US-East)</span>
            </div>
            <div className="text-right">
              <div className="text-zapporaLight/40 font-mono">Healthy</div>
              <div className="text-[10px] text-zapporaLight/50 font-mono">12ms</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-zapporaDark/50 rounded-lg border border-zapporaLight/30 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full zapporaLight" />
              <span className="font-medium text-zapporaLight">pgvector Database</span>
            </div>
            <div className="text-right">
              <div className="text-zapporaLight/40 font-mono">Healthy</div>
              <div className="text-[10px] text-zapporaLight/50 font-mono">4ms</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-zapporaDark/50 rounded-lg border border-zapporaLight/30 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full zapporaLight" />
              <span className="font-medium text-zapporaLight">Redis L2 Caching</span>
            </div>
            <div className="text-right">
              <div className="text-zapporaLight/40 font-mono">Healthy</div>
              <div className="text-[10px] text-zapporaLight/50 font-mono">1ms</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-zapporaDark/50 rounded-lg border border-zapporaLight/30 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full zappora" />
              <span className="font-medium text-zapporaLight">Stripe API Gateway</span>
            </div>
            <div className="text-right">
              <div className="text-zapporaLight/40 font-mono">Operational</div>
              <div className="text-[10px] text-zapporaLight/50 font-mono">140ms</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-zapporaDark/50 rounded-lg border border-zapporaLight/30 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full zappora" />
              <span className="font-medium text-zapporaLight">Docker Code Interpreter</span>
            </div>
            <div className="text-right">
              <div className="text-zapporaLight/40 font-mono">Active (12 pods)</div>
              <div className="text-[10px] text-zapporaLight/50 font-mono">85ms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent activity table */}
      <div className="bg-zapporaDark/50 rounded-2xl p-6">
        <h3 className="text-zapporaLight font-bold flex items-center space-x-2 mb-4">
          <Clock className="w-5 h-5 text-zappora" />
          <span>Recent Execution Logs</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zapporaDark/60 text-zapporaLight/60 uppercase border-b border-zapporaLight/30">
              <tr>
                <th className="p-3">Log ID</th>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Event Pipeline</th>
                <th className="p-3">Latency</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zapporaDark/50 text-zapporaLight/60">
              {recentLogs.map((log) => (
                <tr key={log.id} className="hover:bg-zapporaLight/20 transition-colors">
                  <td className="p-3 text-zappora">{log.id}</td>
                  <td className="p-3 text-zapporaLight/50">{log.time}</td>
                  <td className="p-3 font-semibold text-zapporaLight">{log.event}</td>
                  <td className="p-3 text-zappora">{log.latency}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded bg-zapporaDark text-zapporaLight border border-zapporaLight">
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