import React, { useState } from 'react'
import { Settings as SettingsIcon, Cpu, Shield, CreditCard, Bell, Save, Check, Key, Globe, Trash2 } from 'lucide-react'

export default function Settings() {
  const [activeModel, setActiveModel] = useState('claude-3-5')
  const [isSaving, setIsSaving] = useState(false)
  const [showSaved, setShowSaved] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setShowSaved(true)
      setTimeout(() => setShowSaved(false), 3000)
    }, 1200)
  }

  const models = [
    { id: 'gpt-4o', name: 'GPT-4o (OpenAI)', speed: 'Fast', intelligence: 'Ultra', provider: 'OpenAI' },
    { id: 'claude-3-5', name: 'Claude 3.5 Sonnet', speed: 'Fastest', intelligence: 'Ultra', provider: 'Anthropic' },
    { id: 'grok-2', name: 'Grok-2 (XAI)', speed: 'Fast', intelligence: 'High', provider: 'X.AI' },
    { id: 'llama-3-1', name: 'Llama 3.1 405B', speed: 'Balanced', intelligence: 'Ultra', provider: 'Meta' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white flex items-center space-x-3">
            <SettingsIcon className="w-8 h-8 text-purple-400" />
            <span>Platform Settings</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Configure AI model routing, API keys, and SaaS platform preferences.</p>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : showSaved ? <><Check className="w-4 h-4" /> <span>Saved</span></> : <><Save className="w-4 h-4" /> <span>Save Changes</span></>}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Sidebar Navigation */}
        <aside className="md:col-span-1 space-y-1">
          {[
            { label: 'AI Model Routing', icon: Cpu, active: true },
            { label: 'API Management', icon: Key },
            { label: 'Security & Auth', icon: Shield },
            { label: 'Billing & Tiers', icon: CreditCard },
            { label: 'Notifications', icon: Bell },
            { label: 'Organization', icon: Globe },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <button
                key={idx}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-purple-950/40 text-purple-300 border border-purple-800'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.active ? 'text-purple-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </aside>

        {/* Settings Main Content */}
        <main className="md:col-span-3 space-y-6">
          {/* AI Model Routing Section (Emergent focus) */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 pb-4 border-b border-slate-800">
              <Cpu className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Default AI Model Routing</h3>
            </div>

            <p className="text-sm text-slate-400">
              Select the primary LLM for AppPROH code generation and interactive previews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    activeModel === model.id
                      ? 'border-purple-500 bg-purple-950/30 shadow-lg'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className={`font-bold ${activeModel === model.id ? 'text-white' : 'text-slate-300'}`}>
                      {model.name}
                    </span>
                    {activeModel === model.id && <Check className="w-4 h-4 text-purple-400" />}
                  </div>
                  <div className="flex space-x-2 text-[10px] font-mono">
                    <span className="text-green-400">{model.speed}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-purple-400">{model.intelligence} IQ</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{model.provider}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 p-3 bg-slate-950 rounded-xl border border-slate-800 mt-4">
              <input type="checkbox" id="auto-route" defaultChecked className="w-4 h-4 accent-purple-600 rounded" />
              <label htmlFor="auto-route" className="text-xs text-slate-300 cursor-pointer">
                Enable intelligent complexity-based routing (Auto-switch between models to optimize ILU costs)
              </label>
            </div>
          </section>

          {/* API Keys (Zappora focus) */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 pb-4 border-b border-slate-800">
              <Key className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-white">Platform API Keys</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Production Secret Key</label>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 font-mono text-sm text-slate-500 flex items-center justify-between">
                    <span>sk_appproh_live_************************</span>
                    <button className="text-xs text-purple-400 hover:underline">Reveal</button>
                  </div>
                  <button className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-orange-950/20 border border-orange-900/50 rounded-xl text-xs text-orange-200">
                <p className="font-semibold mb-1">Developer Notice</p>
                API keys are generated via Zappora SaaS workflows and used to authenticate Emergent completion requests. Keep them secure.
              </div>
            </div>
          </section>

          {/* SaaS Tiers (Zappora style) */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 pb-4 border-b border-slate-800">
              <CreditCard className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-white">Current Subscription Tier</h3>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-900/40 to-green-900/40 border border-slate-800 rounded-xl">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">Pro Enterprise Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500 text-white font-bold">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-400">Renews on December 18, 2026 • $149.00 / month</p>
              </div>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors border border-slate-700">
                Manage Billing
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
