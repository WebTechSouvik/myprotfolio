import React,{useRef,useEffect} from "react";
import "./style.css";
import { skillsData } from "../../Data.js";
import { motion } from "framer-motion";
import UseMove from "../../hooks/UseMove.jsx"
import { useSelector, useDispatch } from "react-redux";


const Skills = () => {
	 

const ref = useRef();
 UseMove(ref,"Skills",3)





	
	return (
		<>
			<div className="skills" id="skills" ref={ref}>
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{once: true }}
				>
					My Skills
				</motion.h1>
				<div className="skills-content">
					{skillsData.map((cur, i) => {
						return (
							<motion.div
								className="skill"
								initial={{ y: 100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: i * 0.05 }}
							viewport={{once: true }}
							>
								<span>{cur}</span>
							</motion.div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Skills;
