import React, { useRef } from "react";
import "./style.css";
import UseMove from "../../hooks/UseMove.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../projectCard/ProjectCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { projectsData } from "../../Data.js";

const Project = () => {
	const ref = useRef();
	UseMove(ref, "Projects", 2);

	return (
		<>
			<div className="project" id="projects" ref={ref}>
				<h1>Projects</h1>
				{
					projectsData.map(({title,description,tags,img})=>{
						return <ProjectCard title={title} description={description} tags={tags} img={img} />
					})
				}
			
			</div>
		</>
	);
};

export default Project;
