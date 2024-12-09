import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import StyleOne from "./components/StyleOne/StyleOnePro";
import StyleTwo from "./components/StyleTwo/StyleTwoPro";
import StyleThree from "./components/StyleThree/StyleThreePro";
import StyleFour from "./components/StyleFour/StyleFourPro";
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Navbar/>
     <Navigation/>
     <StyleOne/>
     <StyleTwo/>
     <StyleThree/>
     <StyleFour/>
     <Footer/>
    </>
  )
}

export default App;