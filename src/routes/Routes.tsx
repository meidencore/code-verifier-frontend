import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, KatasDetailPage, KatasPage, LoginPage, RegisterPage } from '../pages'

const AppRoutes = () => {
  return (
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
  )
}
export default AppRoutes