// React Router DOM Imports
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import StickyFooter from './components/dashboard/StickyFooter'

function App() {

  return (
    <>
      <Router> 
        <AppRoutes/>   
      </Router>
      <StickyFooter />
    </>
  )
}

export default App
