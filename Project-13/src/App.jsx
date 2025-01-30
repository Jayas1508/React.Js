import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router';
import Header from './Components/Header';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/", "/signIn"]; 

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

      {/* Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default App;
