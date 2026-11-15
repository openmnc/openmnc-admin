import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useAuthContext } from '../../context/AuthContext.jsx'

export default function AdminLogin() {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  async function onSubmit(data) {
    setLoading(true)
    setServerError('')
    try {
      await login(data.email, data.password)
      navigate('/admin/dashboard')
    } catch (err) {
      setServerError(err?.response?.data?.detail || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-navy-950 flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #000000 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="glass-card p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 mb-2">
              <span className="font-display text-2xl font-bold text-white">Open</span>
              <span className="font-display text-2xl font-bold text-cyan-neon">MNC</span>
              <span className="ml-0.5 w-2 h-2 rounded-full bg-cyan-neon" aria-hidden="true" />
            </div>
            <p className="text-gray-400 text-sm">Admin Dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Admin login form">
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                  className={`
                    w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 text-sm
                    focus:outline-none focus:ring-2 focus:ring-cyan-neon/50 transition-all
                    ${errors.email ? 'border-red-500/50' : 'border-white/10'}
                  `}
                  placeholder="amit@openmnc.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register('password', { required: 'Password is required' })}
                  className={`
                    w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 text-sm
                    focus:outline-none focus:ring-2 focus:ring-cyan-neon/50 transition-all
                    ${errors.password ? 'border-red-500/50' : 'border-white/10'}
                  `}
                  placeholder="••••••••"
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password && (
                  <p role="alert" className="mt-1 text-xs text-red-400">{errors.password.message}</p>
                )}
              </div>
            </div>

            {serverError && (
              <div role="alert" className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-lg font-semibold text-sm
                bg-cyan-neon text-navy-950
                hover:shadow-cyan-glow transition-all duration-200
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
              aria-label={loading ? 'Logging in...' : 'Login'}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" aria-hidden="true" />
                  Logging in...
                </>
              ) : 'Login →'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
