import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Code, Cpu, LayoutDashboard, Settings as SettingsIcon, LogOut, User } from 'lucide-react'

export default function Header({ user, onLogout }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand with composite icons */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-1 p-1 bg-slate-800 rounded-lg border border-slate-700">
              <span className="w-3 h-3 rounded-full bg-[#28a745]" title="Lovable-like Live Preview" />
              <span className="w-3 h-3 rounded-full bg-[#6f42c1]" title="Emergent-like IDE Autocomplete" />
              <span className="w-3 h-3 rounded-full bg-[#fd7e14]" title="Zappora SaaS Workflows" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-[#28a745] via-[#6f42c1] to-[#fd7e14] bg-clip-text text-transparent">
              AppPROH
            </span>
          </Link>
          <span className="text-xs px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 hidden sm:inline-block">
            Pro v3.2
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
              isActive('/') ? 'bg-slate-800 text-purple-400' : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>App Builder & Generator</span>
          </Link>
          <Link
            to="/dashboard"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
              isActive('/dashboard') ? 'bg-slate-800 text-purple-400' : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-orange-400" />
            <span>SaaS Dashboard</span>
          </Link>
          <Link
            to="/settings"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
              isActive('/settings') ? 'bg-slate-800 text-purple-400' : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <SettingsIcon className="w-4 h-4 text-green-400" />
            <span>Settings & Models</span>
          </Link>
        </nav>

        {/* User profile & actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700">
            <User className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-200">{user?.name || 'Rohan Payghan'}</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-green-950 text-green-400 border border-green-800">Pro</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-slate-300 hover:text-red-400 hover:bg-red-950/30 rounded-lg border border-slate-700 hover:border-red-900 transition-all"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}
