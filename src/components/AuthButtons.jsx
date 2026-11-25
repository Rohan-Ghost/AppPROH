import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function AuthButtons({ onGetStarted, onLogout }) {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onGetStarted}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-green-600 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-all transform hover:scale-[1.02]"
      >
        <Sparkles className="w-4 h-4" />
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4" />
      </button>
      <button
        onClick={onLogout}
        className="px-4 py-2 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-all"
      >
        Logout
      </button>
    </div>
  )
}
