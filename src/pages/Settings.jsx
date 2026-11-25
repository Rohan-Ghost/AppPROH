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
    { id: 'claude-3-5', name: 'Claude 3.5 Sonnet', speed: 'Fastest', intelligence: 'Ultra', provider: 'Anthropic' },
    { id: 'gpt-4o', name: 'GPT-4o', speed: 'Fast', intelligence: 'Ultra', provider: 'OpenAI' },
    { id: 'grok-2', name: 'Grok-2', speed: 'Fast', intelligence: 'High', provider: 'X.AI' },
    { id: 'llama-3-1', name: 'Llama 3.1 405B', speed: 'Balanced', intelligence: 'Ultra', provider: 'Meta' },
  ]

  return (
    <div className="min-h-screen bg-zapporaDark text-zapporaLight p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-zappora flex items-center space-x-3">
              <SettingsIcon className="w-8 h-8 text-zappora" />
              <span>Platform Settings</span>
            </h1>
            <p className="text-zapporaLight/80 text-sm mt-1">Configure AI model routing, API keys, and SaaS platform preferences.</p>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-zapporaLight via-zappora to-zapporaDark text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : showSaved ? <><Check className="w-4 h-4" /> <span>Saved</span></> : <><Save className="w-4 h-4" /> <span>Save Changes</span></>}
          </button>
        </div>

        {/* AI Model Routing Section */}
        <section className="bg-zapporaDark/50 rounded-2xl p-6 mb-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-zapporaLight/30">
            <Cpu className="w-5 h-5 text-zappora" />
            <h3 className="text-lg font-bold text-zappora">Default AI Model Routing</h3>
          </div>

          <p className="text-zapporaLight/60 text-sm">
            Select the primary LLM for AppPROH code generation and interactive previews.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  activeModel === model.id
                    ? 'border-zapporaLight bg-zapporaDark/20 shadow-lg'
                    : 'border-zapporaDark/30 bg-zapporaDark/50 hover:border-zapporaDark/50'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`font-bold ${activeModel === model.id ? 'text-white' : 'text-zapporaLight'}`}>
                    {model.name}
                  </span>
                  {activeModel === model.id && <Check className="w-4 h-4 text-zappora" />}
                </div>
                <div className="flex space-x-2 text-[10px] font-mono">
                  <span className="text-zapporaLight">{model.speed}</span>
                  <span className="text-zapporaLight/60">•</span>
                  <span className="text-zapporaLight">{model.intelligence} IQ</span>
                  <span className="text-zapporaLight/60">•</span>
                  <span className="text-zapporaLight/40">{model.provider}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 p-3 bg-zapporaDark/20 border border-zapporaLight/30 rounded-xl mt-4">
            <input type="checkbox" id="auto-route" defaultChecked className="w-4 h-4 accent-zappora rounded" />
            <label htmlFor="auto-route" className="text-xs text-zapporaLight/60 cursor-pointer">
              Enable intelligent complexity-based routing (Auto-switch between models to optimize ILU costs)
            </label>
          </div>
        </section>

        {/* API Keys Section */}
        <section className="bg-zapporaDark/50 rounded-2xl p-6 mb-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-zapporaLight/30">
            <Key className="w-5 h-5 text-zappora" />
            <h3 className="text-lg font-bold text-zappora">Platform API Keys</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zapporaLight/60">Production Secret Key</label>
              <div className="flex space-x-2">
                <div className="flex-1 bg-zapporaDark/80 border border-zapporaLight/30 rounded-xl px-4 py-2.5 font-mono text-zapporaLight/50 flex items-center justify-between">
                  <span>sk_appproh_live_************************</span>
                  <button className="text-xs text-zappora hover:underline">Reveal</button>
                </div>
                <button className="p-2.5 bg-zapporaDark/50 hover:bg-zapporaDark/40 text-zapporaLight/40 rounded-xl border border-zapporaLight/30 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-zapporaDark/20 border border-zapporaLight/30 rounded-xl text-xs text-zapporaLight">
              <p className="font-semibold mb-1">Developer Notice</p>
              API keys are generated via Zappora SaaS workflows and used to authenticate completion requests. Keep them secure.
            </div>
          </div>
        </section>

        {/* SaaS Tiers Section */}
        <section className="bg-zapporaDark/50 rounded-2xl p-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-zapporaLight/30">
            <CreditCard className="w-5 h-5 text-zappora" />
            <h3 className="text-lg font-bold text-zappora">Current Subscription Tier</h3>
          </div>

          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-zapporaDark/20 to-zapporaDark/20 border border-zapporaLight/30 rounded-xl">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-zapporaLight">Pro Enterprise Plan</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zapporaLight text-white font-bold">ACTIVE</span>
              </div>
              <p className="text-xs text-zapporaLight/60">Renews on December 18, 2026 • $149.00 / month</p>
            </div>
            <button className="px-4 py-2 bg-zapporaDark/20 hover:bg-zapporaLight/10 text-white text-xs font-bold rounded-lg transition-colors border border-zapporaLight">
              Manage Billing
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}