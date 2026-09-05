import ThemeManager from './components/theme/ThemeManager'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="min-h-screen">
      <ThemeManager />
      <AppRoutes />
    </div>
  )
}

export default App
