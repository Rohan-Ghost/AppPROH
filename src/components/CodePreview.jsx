import React, { useState } from 'react'
import { Code, Copy, Check, Terminal, FileCode } from 'lucide-react'

export default function CodePreview({ title = 'AppPROH Component', code, language = 'jsx' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileCode className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono text-slate-300 font-semibold">{title}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 uppercase font-mono">{language}</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div className="p-4 bg-slate-950 font-mono text-xs text-purple-100 overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </div>
  )
}
