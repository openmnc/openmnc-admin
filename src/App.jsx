import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import AdminLayout from './pages/admin/AdminLayout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import ServicesAdmin from './pages/admin/ServicesAdmin.jsx'
import CareersAdmin from './pages/admin/CareersAdmin.jsx'
import SettingsAdmin from './pages/admin/SettingsAdmin.jsx'
import ContactList from './pages/admin/ContactList.jsx'
import BlogsAdmin from './pages/admin/BlogsAdmin.jsx'
import ApplicationsAdmin from './pages/admin/ApplicationsAdmin.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Default redirect to /admin/dashboard */}
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/login" element={<Navigate to="/admin/login" replace />} />

          {/* Admin Routes with /admin prefix */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="applications" element={<ApplicationsAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="careers" element={<CareersAdmin />} />
            <Route path="settings" element={<SettingsAdmin />} />
            <Route path="contacts" element={<ContactList />} />
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
