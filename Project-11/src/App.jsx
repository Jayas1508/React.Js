import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import Add from './Components/Add';
import Home from './Components/Home';
import Edit from './Components/Edit';
import View from './Components/View';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<View/>} />
      </Routes>
    </>
  )
}

export default App
