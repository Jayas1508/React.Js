import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        
      </Routes>
    </>
  )
}

export default App
