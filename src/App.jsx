import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

function App() {
  const [user, setUser] = useState({
    id: 'user_rohan',
    name: 'Rohan Payghan',
    email: 'payghanrohan@gmail.com',
    tier: 'PRO'
  })

  const handleLogout = () => {
    // In a real app, this would clear tokens
    console.log('Logging out user...')
    alert('Logged out from AppPROH')
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <Header user={user} onLogout={handleLogout} />

        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="bg-slate-900/50 border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-slate-500">
              &copy; 2026 AppPROH Unified AI Platform. Powered by Emergent RAG, Lovable Preview, and Zappora SaaS.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
