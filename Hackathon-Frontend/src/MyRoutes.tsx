import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Pages/Navbar'
import Dashboard from './component/Dashboard'
import LoginPage from './component/Login'
import HomePage from './component/Pages/Home'
import Navhome from './component/Pages/Navhome'
import HospitalRegistrationForm from './component/Pages/RegistratiinForm'
import MedicineForm from './component/Pages/MedicationForm'
import CheckUpDetails from './component/Pages/CheckUps'
import AddPatientForm from './component/Pages/AddPatient'
import SelfInformation from './component/SelfInformation'
import DiagnosisForm from './component/Pages/DiagnosisForm'

function MyRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/navhome' element={<Navhome />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<HospitalRegistrationForm />} />
<<<<<<< HEAD
        <Route path='/medication:patientId' element={<MedicineForm />} />
        <Route path='/diagnosis' element={< DiagnosisForm/>} />
        <Route path='/checkup:patientId' element={<CheckUpDetails />} />
=======
        <Route path='/mdetails/:patientId' element={<MedicineForm />} />
        <Route path='/diagnosis/:patientId' element={<DiagnosisForm />} />
        <Route path='/cdetails/:patientId' element={<CheckUpDetails />} />
>>>>>>> 5daa23fa968d854d2c0ecd1b556b4c340219bdc7
        <Route path='/selfinfo' element={<SelfInformation />} />
        <Route path='/addpatient' element={<AddPatientForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
