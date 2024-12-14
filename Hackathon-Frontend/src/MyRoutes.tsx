import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Pages/Navbar'
import Dashboard from './component/Dashboard'
import LoginPage from './component/Login'
import HomePage from './component/Pages/Home'
import Navhome from './component/Pages/Navhome'

function MyRoutes ()  {
  return (
     
    <BrowserRouter>
        <Routes>
            <Route path='/navbar' element={<Navbar/>}></Route>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/navhome' element={<Navhome/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
