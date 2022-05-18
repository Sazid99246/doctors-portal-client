import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointemnt from './Pages/Appointment/Appointemnt';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointemnt/>
          </RequireAuth>
        }></Route>
        <Route path='/review' element={<Reviews/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
