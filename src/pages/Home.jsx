import React, { useState } from 'react'
import { Zap, Users, Server, Shield, CreditCard, Clock, BarChart2, Mic, Laptop } from 'lucide-react'

export default function Home() {
  const [section, setSection] = useState('dashboard') // dashboard | metrics | settings

  const platforms = [
    { name: 'Lovable', color: 'zappora', icon: Laptop },
    { name: 'Zappora', color: 'zapporaLight', icon: CreditCard },
    { name: 'Stripe', color: 'zappora', icon: Shield },
  ]

  const handleSection = (s) => setSection(s)

  return (
    <div className="min-h-screen bg-zapporaDark text-zapporaLight flex flex-col items-center justify-center p-8">
      {/* Navigation */}
      <div className="flex gap-6 mb-12">
        {platforms.map((p) => (
          <button
            key={p.name}
            onClick={() => handleSection(p.name)}
            className={`px-6 py-3 rounded-full border border-zapporaLight/30 text-zappora text-sm font-medium transition-all hover:border-zappora hover:text-zapporaDark ${section === p.name ? 'border-zappora text-zapporaDark bg-zapporaLight/20' : ''}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Dashboard section */}
      {section === 'dashboard' && (
        <div className="bg-zapporaDark/50 rounded-2xl p-8 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-zappora mb-6">AppPROH</h1>
          <p className="text-zapporaLight/80 text-base mb-8">
            Zappora SaaS Platform • Real-time analytics & billing
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-zappora" />
                <div>
                  <div className="text-zapporaLight">14,290</div>
                  <div className="text-xs text-zapporaLight/60">Insights (ILU)</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">vs last week</div>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <Server className="w-5 h-5 text-zappora" />
                <div>
                  <div className="text-zapporaLight">128ms</div>
                  <div className="text-xs text-zapporaLight/60">Avg Latency</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">-12.3% vs prior</div>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-zappora" />
                <div>
                  <div className="text-zapporaLight">1.42M</div>
                  <div className="text-xs text-zapporaLight/60">Token Usage</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">+24.1% vs prior</div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="mt-8 pt-8 border-t border-zapporaLight/30">
            <h2 className="text-zapporaLight text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 py-2 border-b border-zapporaLight/30 last:border-0">
                <Zap className="w-4 h-4 text-zappora" />
                <div className="flex-1">
                  <div className="font-medium">Vector query completed</div>
                  <div className="text-zapporaLight/60 text-sm">10:40 AM</div>
                </div>
                <div className="text-zapporaLight/60 text-xs">200 OK</div>
              </div>
              <div className="flex items-center space-x-3 py-2 border-b border-zapporaLight/30 last:border-0">
                <Users className="w-4 h-4 text-zappora" />
                <div className="flex-1">
                  <div className="font-medium">Code generated</div>
                  <div className="text-zapporaLight/60 text-sm">10:38 AM</div>
                </div>
                <div className="text-zapporaLight/60 text-xs">200 OK</div>
              </div>
              <div className="flex items-center space-x-3 py-2 border-b border-zapporaLight/30 last:border-0">
                <CreditCard className="w-4 h-4 text-zappora" />
                <div className="flex-1">
                  <div className="font-medium">Subscription synced</div>
                  <div className="text-zapporaLight/60 text-sm">10:35 AM</div>
                </div>
                <div className="text-zapporaLight/60 text-xs">200 OK</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics overview */}
      {section === 'metrics' && (
        <div className="bg-zapporaDark/50 rounded-2xl p-8 w-full max-w-4xl">
          <h2 className="text-zapporaLight text-xl font-bold mb-6">Platform Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart2 className="w-5 h-5 text-zappora" />
                <div>
                  <div className="text-zapporaLight">14.3K</div>
                  <div className="text-xs text-zapporaLight/60">Insights</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">+18.4% this month</div>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-zapporaLight" />
                <div>
                  <div className="text-zapporaLight">128ms</div>
                  <div className="text-xs text-zapporaLight/60">Latency</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">-12.3% this month</div>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <div className="flex items-center space-x-3 mb-3">
                <Cpu className="w-5 h-5 text-zapporaLight" />
                <div>
                  <div className="text-zapporaLight">1.42M</div>
                  <div className="text-xs text-zapporaLight/60">Tokens</div>
                </div>
              </div>
              <div className="text-zapporaLight/60 text-xs">+24.1% this month</div>
            </div>
          </div>
        </div>
      )}

      {/* Settings section */}
      {section === 'settings' && (
        <div className="bg-zapporaDark/50 rounded-2xl p-8 w-full max-w-4xl">
          <h2 className="text-zapporaLight text-xl font-bold mb-6">Platform Settings</h2>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <h3 className="text-zapporaLight font-medium mb-3">Model Routing</h3>
              <p className="text-zapporaLight/60 text-sm">
                Primary: Claude 3.5 Sonnet • Fallback: GPT-4o
              </p>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <h3 className="text-zapporaLight font-medium mb-3">API Keys</h3>
              <p className="text-zapporaLight/60 text-sm">
                Zappora SaaS keys configured and active
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <h3 className="text-zapporaLight font-medium mb-3">Subscription</h3>
              <p className="text-zapporaLight/60 text-sm">
                Pro Enterprise • Renews Dec 18 • $149/mo
              </p>
            </div>

            <div className="bg-zapporaDark/30 rounded-xl p-6 border border-zapporaLight/30">
              <h3 className="text-zapporaLight font-medium mb-3">Notifications</h3>
              <p className="text-zapporaLight/60 text-sm">
                Email • In-app • Slack webhook
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA at bottom */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-zapporaLight via-zappora to-zapporaDark text-white font-bold rounded-xl shadow-lg hover:from-zapporaDark hover:to-zappora transition-all">
          Start Free Trial
        </button>
        <p className="mt-4 text-zapporaLight/60 text-sm">
          Join 2,487+ teams building with AppPROH
        </p>
      </div>
    </div>
  )
}