import React, { useRef } from "react";
import "./style.css";
import UseMove from "../../hooks/UseMove.jsx";
import { useSelector, useDispatch } from "react-redux";

const Contact = () => {
	const ref = useRef();
	UseMove(ref, "Contact", 5);
	return (
		<>
			<div className="contact" id="contact" ref={ref}>
				<div className="contact-details">
					<h1>Contact Me</h1>
					<p>
						Please contact me directly at example@gmail.com or
						through this form.
					</p>
				</div>
				<div className="contact-form">
					<input
						type="text"
						placeholder="Your Email"
						className="email"
					/>
					<textarea
						className="email msg-dec"
						placeholder="Your Massage"
					></textarea>
					<button>
						Submit<i class="fa-sharp fa-solid fa-paper-plane"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Contact;
