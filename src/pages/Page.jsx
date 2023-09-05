import React from 'react'
import Navbar from "../components/navbar/Navbar.jsx"
import Home from "../components/home/Home.jsx"
import About from "../components/about/About.jsx"
import Project from "../components/project/Project.jsx"
import Skills from "../components/skills/Skills.jsx"
import Experince from "../components/experince/Experince.jsx"
import Contact from "../components/contact/Contact.jsx"
import {BrowserRouter} from "react-router-dom"



const Page = () => {
	return (
		<>
			<BrowserRouter>
			<Navbar/>
			<Home/>
			<About/>
			<Project/>
			<Skills/>
			<Experince/>
			<Contact/>
			<div style={{height:"200px",width:"100vw"}}></div>
			</BrowserRouter>
		</>
	)
}

export default Page