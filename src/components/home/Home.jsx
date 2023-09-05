import React, { useRef } from "react";
import "./style.css";
import { motion } from "framer-motion";
import UseMove from "../../hooks/UseMove.jsx";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../assets/profile.png";

const Home = () => {
	const ref = useRef();
	UseMove(ref, "Home", 0);
	return (
		<>
			<section className="home" id="home" ref={ref}>
				<div className="bg-gradient"></div>
				<motion.div
					className="home-content"
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<div
						className="profile-img"
						// initial={{ scale: 0, opacity: 0 }}
						// animate={{ scale: 1, opacity: 1 }}
						// transition={{delay:0.2, duration: 0.8 }}
					>
						<img src={profile} alt="" />
					</div>
					<motion.div
						className="home-text"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 0.8 }}
					>
						<h1>
							Hello, I'm Souvik. I'm a frontend developer with a
							knack for crafting engaging Web experience with
							HTML,CSS,JavaScript and build dynamic Web interfaces
							with React JS.
						</h1>
					</motion.div>
					<div className="home-link">
						<a
							href="#"
							className="contact-link"
							// initial={{ x: -150 }}
							// animate={{ x: 0 }}
							// whileHover={{ scale: 1.1 }}
							// transition={{
							// 	// type: "spring",

							// 	// stiffness: 50,
							// }}
						>
							<motion.span>Contact me here</motion.span>
							<i class="fa-solid fa-arrow-right"></i>
						</a>
						<a
							href="#"
							className="cv-link"
							// initial={{ x: 150 }}
							// animate={{ x: 0 }}
							// transition={{
							// 	type: "spring",

							// 	stiffness: 50,
							// }}
						>
							<span>Download CV</span>
							<i class="fa-sharp fa-solid fa-download"></i>
						</a>
						<div
							className="icon"
							// initial={{ scale: 0, opacity: 0 }}
							// animate={{ scale: 1, opacity: 1 }}
						>
							<i class="fa-brands fa-linkedin"></i>
						</div>
						<div className="icon">
							<i class="fa-brands fa-github"></i>
						</div>
					</div>
				</motion.div>
				<div className="layer-mix"></div>
			</section>
		</>
	);
};

export default Home;
