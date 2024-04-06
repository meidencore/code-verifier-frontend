// React Router DOM Imports
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

import { HomePage, KatasDetailPage, KatasPage, LoginPage, RegisterPage } from './pages'
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
        {/* TODO Export to routes folder */}
        <Routes>
          {/* Routes definition */}
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/katas' element={<KatasPage />}></Route>
          <Route path='/katas/:id' element={<KatasDetailPage />}></Route>
          {/* Redirect when the Page is Not Found */}
          <Route
          path='*'
          element={<Navigate to='/' replace/>}
          >

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
