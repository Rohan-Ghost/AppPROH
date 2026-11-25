import React, { useState } from 'react'
import { Code, Copy, Check, Cpu, Zap, Activity } from 'lucide-react'

export default function CompletionCard({ suggestion }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (suggestion?.code) {
      navigator.clipboard.writeText(suggestion.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-purple-950 text-purple-400 rounded-lg border border-purple-800">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-100">{suggestion?.title || 'AI Autocomplete Prediction'}</h4>
            <p className="text-xs text-slate-400 flex items-center space-x-2">
              <span className="text-purple-400 font-mono">Model: {suggestion?.model || 'Claude-3.5-Sonnet'}</span>
              <span>•</span>
              <span className="text-green-400 flex items-center">
                <Zap className="w-3 h-3 mr-0.5 inline" /> Latency: {suggestion?.latency || '142ms'}
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <p className="text-sm text-slate-300 mb-3">{suggestion?.description || 'Suggested code completion generated via context processor & RAG lookup.'}</p>

      <div className="bg-slate-950 p-4 rounded-lg font-mono text-sm text-purple-200 border border-slate-800 overflow-x-auto relative">
        <pre>{suggestion?.code || `// Emergent-style RAG & Completion Output
const routeAIModel = async (prompt, complexity) => {
  if (complexity > 0.8) return 'gpt-4o';
  if (complexity > 0.4) return 'claude-3.5-sonnet';
  return 'grok-2';
};`}</pre>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-slate-400">
            <Activity className="w-3 h-3 text-orange-400 mr-1" /> Token Usage: {suggestion?.tokens || '128 input / 64 output'}
          </span>
        </div>
        <span className="text-purple-400 hover:underline cursor-pointer">View Context Payload →</span>
      </div>
    </div>
  )
}
