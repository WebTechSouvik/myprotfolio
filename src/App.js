import logo from './logo.svg';
import './App.css';
import Page from "./pages/Page.jsx"
import Landinganimation from "./components/landinganimation/Landinganimation.jsx"
import {useState,useEffect} from "react"

function App() {
  const [show , setShow]=useState(true)

  // setTimeout(()=>{
  //   setShow(false)
  // },4000)
  // return show?<Landinganimation/>:<Page/>
  return <Page/>
 
}

export default App;
