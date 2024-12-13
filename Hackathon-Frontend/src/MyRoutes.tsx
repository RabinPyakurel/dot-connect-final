import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Pages/Navbar'

function MyRoutes ()  {
  return (
     
    <BrowserRouter>
        <Routes>
            <Route path='/navbar' element={<Navbar/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
