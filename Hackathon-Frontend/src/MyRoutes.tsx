import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Pages/Navbar'
import Dashboard from './component/Dashboard'
import LoginPage from './component/Login'
import HomePage from './component/Pages/Home'
import Navhome from './component/Pages/Navhome'
import HospitalRegistrationForm from './component/Pages/RegistratiinForm'
import MedicineForm from './component/Pages/MedicationForm'
import DiagnosisForm from './component/Pages/DiagnosisForm'
import CheckUpDetails from './component/Pages/CheckUps'
import SelfInformation from './component/Selfinformation'
import AddPatientForm from './component/Pages/AddPatient'

function MyRoutes ()  {
  return (
     
    <BrowserRouter>
        <Routes>
            <Route path='/navbar' element={<Navbar/>}></Route>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/navhome' element={<Navhome/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/register' element={<HospitalRegistrationForm/>}/>
            <Route path='/medication' element={<MedicineForm/>}/>
            <Route path='/diagnosis' element={<DiagnosisForm/>}/>
            <Route path='/checkup' element={<CheckUpDetails/>}/>
            <Route path='/selfinfo' element={<SelfInformation/>}/>
            <Route path='/addpatient' element={<AddPatientForm/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
