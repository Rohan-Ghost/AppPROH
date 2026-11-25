import React, { useState } from 'react'
import AppGenerator from '../components/AppGenerator'
import CompletionCard from '../components/CompletionCard'
import CodePreview from '../components/CodePreview'
import { Sparkles, Code, Layers, Zap, Cpu, ArrowRight, Shield, Rocket } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('app-builder') // app-builder | autocomplete | codegen
  const [codePrompt, setCodePrompt] = useState('')
  const [generatedResult, setGeneratedResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const sampleSuggestions = [
    {
      title: 'Context Processor Autocomplete',
      model: 'Claude-3.5-Sonnet',
      latency: '112ms',
      description: 'Emergent-style predicting vector context embedding lookup for active editor block.',
      tokens: '240 in / 110 out',
      code: `// Emergent.io Context Autocomplete Engine
export async function processContextAndAutocomplete(userCode, cursorOffset) {
  const embedding = await generateVectorEmbedding(userCode.slice(0, cursorOffset));
  const retrievedDocs = await vectorStore.query({ vector: embedding, topK: 5 });
  return await llmRouter.complete({
    prompt: formatPromptWithDocs(userCode, retrievedDocs),
    temperature: 0.2
  });
}`
    },
    {
      title: 'Zappora SaaS Stripe Webhook Handler',
      model: 'GPT-4o',
      latency: '204ms',
      description: 'Zappora subscription billing and webhook sync.',
      tokens: '310 in / 180 out',
      code: `// Zappora Billing & Webhook Workflow
export async function handleStripeWebhook(event) {
  switch(event.type) {
    case 'customer.subscription.created':
      await db.users.updateSubscriptionTier(event.data.object.customer, 'PRO');
      break;
    case 'invoice.payment_failed':
      await sendPaymentRetryNotification(event.data.object.customer);
      break;
  }
}`
    }
  ]

  const handleCodeGen = (e) => {
    e.preventDefault()
    if (!codePrompt.trim()) return

    setLoading(true)
    setTimeout(() => {
      setGeneratedResult(`// AppPROH AI Code Generation Result
// Prompt: ${codePrompt}

import React, { useState, useEffect } from 'react';
import { Card, Button, Badge } from '@/components/ui';

export function GeneratedFeature() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from AppPROH backend
    fetch('/api/v1/analytics')
      .then(res => res.json())
      .then(d => setData(d));
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-2">Generated Feature</h3>
      <p className="text-sm text-slate-400">Integrated Emergent RAG + Lovable Live Preview</p>
    </div>
  );
}`)
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero section with brand integration */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800 text-purple-300 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-green-400" />
          <span>Unified Full-Stack AI Platform Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          AppPROH{' '}
          <span className="bg-gradient-to-r from-[#28a745] via-[#6f42c1] to-[#fd7e14] bg-clip-text text-transparent">
            Studio
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Combining the best of <span className="text-[#28a745] font-semibold">Lovable.dev</span> (Live App Builder),{' '}
          <span className="text-[#6f42c1] font-semibold">Emergent.io</span> (IDE Autocomplete & RAG), and{' '}
          <span className="text-[#fd7e14] font-semibold">Zappora</span> (SaaS Billing & Auth).
        </p>
      </div>

      {/* Mode switcher tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex space-x-2 max-w-xl w-full">
          <button
            onClick={() => setActiveTab('app-builder')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'app-builder'
                ? 'bg-green-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>App Builder (Lovable)</span>
          </button>
          <button
            onClick={() => setActiveTab('autocomplete')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'autocomplete'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Autocomplete (Emergent)</span>
          </button>
          <button
            onClick={() => setActiveTab('codegen')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'codegen'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Code Gen & RAG</span>
          </button>
        </div>
      </div>

      {/* Active Tab Content */}
      {activeTab === 'app-builder' && (
        <div className="space-y-6">
          <AppGenerator />
        </div>
      )}

      {activeTab === 'autocomplete' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span>Emergent-Style Autocomplete & RAG Router</span>
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Real-time token completion pipeline with pgvector semantic similarity search.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleSuggestions.map((s, idx) => (
                <CompletionCard key={idx} suggestion={s} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'codegen' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
              <Code className="w-5 h-5 text-orange-400" />
              <span>Multi-Model AI Code Generation</span>
            </h3>
            <p className="text-sm text-slate-400">
              Generate full stack components or logic functions using optimal LLM routing.
            </p>
          </div>

          <form onSubmit={handleCodeGen} className="space-y-4">
            <input
              type="text"
              value={codePrompt}
              onChange={(e) => setCodePrompt(e.target.value)}
              placeholder="e.g. Write a TypeScript middleware for JWT authentication with rate limiting..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
            />
            <button
              type="submit"
              disabled={!codePrompt.trim() || loading}
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all text-sm disabled:opacity-50"
            >
              {loading ? 'Generating...' : 'Generate Code Snippet'}
            </button>
          </form>

          {generatedResult && (
            <CodePreview title="Generated Output" code={generatedResult} language="typescript" />
          )}
        </div>
      )}

      {/* Highlights / Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-green-950 text-green-400 flex items-center justify-center border border-green-800">
            <Rocket className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-white">Lovable Preview Engine</h4>
          <p className="text-xs text-slate-400">
            Sub-2-second preview feedback loop with instant hot-reloading component canvas.
          </p>
        </div>

        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800">
            <Cpu className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-white">Emergent Autocomplete</h4>
          <p className="text-xs text-slate-400">
            pgvector RAG pipeline, context window management, and multi-model routing (GPT-4o / Claude 3.5).
          </p>
        </div>

        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-orange-950 text-orange-400 flex items-center justify-center border border-orange-800">
            <Shield className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-white">Zappora SaaS Stack</h4>
          <p className="text-xs text-slate-400">
            Enterprise subscription tiers, Stripe payment webhooks, team auth, and ILU metrics tracking.
          </p>
        </div>
      </div>
    </div>
  )
}
