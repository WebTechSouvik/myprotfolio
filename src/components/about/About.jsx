import React, { useRef } from "react";
import "./style.css";
import UseMove from "../../hooks/UseMove.jsx";
import { useSelector, useDispatch } from "react-redux";

const About = () => {
	const ref = useRef();
	UseMove(ref, "About", 1);

	return (
		<>
			<div className="about" id="about" ref={ref}>
				<h1 className="title">About me</h1>
				<div className="about-content">
					<p>
						Welcome to my portfolio! I'm [Your Name], a passionate
						and dedicated frontend engineering student. As a curious
						learner and an aspiring developer, I'm on a journey to
						bring creative ideas to life through elegant and
						user-friendly web interfaces. My fascination with the
						intersection of design and technology led me to the
						world of frontend development. I thrive on turning
						complex problems into intuitive and visually appealing
						solutions. With a keen eye for detail and a strong
						foundation in HTML, CSS, and JavaScript, I'm excited to
						craft seamless digital experiences that resonate with
						users.
					</p>
					<br />
					<p>
						Throughout my academic journey, I've not only gained
						technical expertise but also developed a strong sense of
						collaboration. I believe in the power of teamwork and
						effective communication to create outstanding products.
						I'm constantly seeking opportunities to enhance my
						skills, staying up-to-date with the latest industry
						trends and technologies.
					</p>
					<br />
					<p>
						When I'm not coding, I enjoy playing video games and
						cricket, watching movies. Appart from coding drawing is
						my second passion.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
