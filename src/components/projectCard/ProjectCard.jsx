import React, { useRef } from "react";
import "./style.css";
import { motion, useScroll, useTransform } from "framer-motion";
// import movix from "../../assets/movix.PNG"

const ProjectCard = ({ title, description, tags, img }) => {
	const ref1 = useRef();

	const { scrollYProgress } = useScroll({
		target: ref1,
		offset: ["0 1", "1.2 1"],
	});
	const progress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<>
			<motion.div
				className="project-card"
				ref={ref1}
				style={{ scale: progress, opacity }}
			>
				<div className="project-des">
					<div>
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
					<div className="project-skills">
						{tags.map((curr) => {
							return (
								<div className="project-skill">
									<span>{curr}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className="project-img">
					<img src={require(`../../assets/${img}.PNG`)} alt="" />
				</div>
			</motion.div>
		</>
	);
};

export default ProjectCard;
