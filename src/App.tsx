// React Router DOM Imports
import { BrowserRouter as Router, Link } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import CopyRights from './components/dashboard/CopyRights'

function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/katas'>Katas</Link>
            </li>
          </ul>
        </nav>   
        <AppRoutes/>   
      </Router>
      <CopyRights />
    </>
  )
}

export default App
