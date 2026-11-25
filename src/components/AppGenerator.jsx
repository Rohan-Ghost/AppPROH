import React, { useState } from 'react'
import { Sparkles, Layers, Play, CheckCircle, RefreshCw, Eye, Code, ArrowRight } from 'lucide-react'

export default function AppGenerator({ onAppCreated }) {
  const [prompt, setPrompt] = useState('')
  const [appType, setAppType] = useState('fullstack')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState('input') // input | generating | ready
  const [generatedApp, setGeneratedApp] = useState(null)

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setLoading(true)
    setStep('generating')

    setTimeout(() => {
      const mockApp = {
        id: `app_${Date.now()}`,
        name: prompt.slice(0, 24) + ' App',
        description: prompt,
        type: appType,
        componentsCount: 8,
        previewUrl: 'https://preview.appproh.io/demo-app',
        code: `// Lovable-style Generated UI Component
import React, { useState } from 'react';
import { Card, Button, Badge } from '@/components/ui';

export default function DashboardView() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">${prompt}</h2>
      <Badge color="green">Lovable Fast-Preview Active</Badge>
      <div className="mt-6 flex space-x-4">
        <Button onClick={() => setCount(c => c + 1)}>Clicks: {count}</Button>
      </div>
    </div>
  );
}`,
        schema: {
          pages: ['Home', 'Dashboard', 'Analytics', 'Settings'],
          theme: 'Dark Modern Glass',
          apiEndpoints: ['/api/v1/auth', '/api/v1/predict', '/api/v1/data']
        }
      }

      setGeneratedApp(mockApp)
      setLoading(false)
      setStep('ready')
      if (onAppCreated) onAppCreated(mockApp)
    }, 1800)
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-xl shadow-lg">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>Lovable App Builder Engine</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-950 text-green-400 border border-green-800">
              Live Preview &lt; 2s
            </span>
          </h3>
          <p className="text-sm text-slate-400">Describe your application or UI concept to generate production react code & preview instantly.</p>
        </div>
      </div>

      {step === 'input' && (
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Prompt Specification / Requirements
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Create a modern SaaS dashboard with revenue charts, user management table, dark mode toggle, and Stripe checkout integration..."
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: 'fullstack', label: 'Full-Stack App', desc: 'React + Node + DB' },
              { id: 'frontend', label: 'Frontend Only', desc: 'Tailwind + React' },
              { id: 'saas', label: 'Zappora SaaS Bundle', desc: 'Auth + Billing + UI' }
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setAppType(t.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  appType === t.id
                    ? 'border-purple-500 bg-purple-950/40 text-purple-200 shadow-md'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-sm">{t.label}</div>
                <div className="text-xs text-slate-500">{t.desc}</div>
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={!prompt.trim() || loading}
            className="w-full py-3.5 bg-gradient-to-r from-green-600 via-emerald-600 to-purple-600 hover:from-green-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <Sparkles className="w-5 h-5" />
            <span>Generate Full-Stack Application</span>
          </button>
        </form>
      )}

      {step === 'generating' && (
        <div className="py-12 text-center space-y-4">
          <div className="inline-block relative">
            <RefreshCw className="w-12 h-12 text-purple-400 animate-spin mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-200">Executing Lovable Multi-Step Pipeline...</h4>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Parsing prompt specs → Building UI schema → Resolving component dependencies → Compiling instant preview.
          </p>
        </div>
      )}

      {step === 'ready' && generatedApp && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-green-950/40 border border-green-800 rounded-xl text-green-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-sm">Application Generated Successfully in 1.78s</span>
            </div>
            <button
              onClick={() => setStep('input')}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              New Prompt
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200 flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span>Generated Component Code</span>
              </h4>
              <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-300 border border-slate-800 max-h-64 overflow-y-auto">
                <pre>{generatedApp.code}</pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200 flex items-center space-x-2">
                <Eye className="w-4 h-4 text-green-400" />
                <span>Instant Interactive Preview</span>
              </h4>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 h-64 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-400 font-mono">Component Canvas</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-900/60 text-green-300">Active</span>
                  </div>
                  <h5 className="text-lg font-bold text-white">{generatedApp.name}</h5>
                  <p className="text-xs text-slate-400 line-clamp-2">{generatedApp.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">Pages: {generatedApp.schema.pages.join(', ')}</span>
                  <a
                    href={generatedApp.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 text-xs px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium"
                  >
                    <span>Full Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
