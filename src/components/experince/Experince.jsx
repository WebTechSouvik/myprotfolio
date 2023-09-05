import React, { useRef } from "react";
import "./style.css";
import { motion } from "framer-motion";
import UseMove from "../../hooks/UseMove.jsx";
import { experiencesData } from "../../Data.js";
import { useSelector, useDispatch } from "react-redux";
import useDimension from "../../hooks/useDimension.jsx";

const Experince = () => {
	const ref = useRef();
	UseMove(ref, "Experience", 4);
	const width = useDimension();
	return (
		<>
			<div className="Experince" id="experience" ref={ref}>
				<h1>Experince</h1>
				<div className="exp-contents">
					{experiencesData.map(
						({ title, location, description, date }, i) => {
							return (
								<>
									<div className="exp-content">
										<motion.div
											className="exp-des"
											initial={{
												x:
													width > 425
														? i % 2 == 0
															? -100
															: 100
														: 100,
												opacity: 0,
											}}
											whileInView={{
												// x: i % 2 == 0 ? 30 : -30,
												x: 0,
												opacity: 1,

												originX: 0,
											}}
											viewport={{
												amount: 0.2,
												once: true,
											}}
											transition={{
												type: "spring",
											}}
										>
											<div className="exp-title">
												<h3>{title}</h3>
												<div>
													<i class="fa-solid fa-building-columns"></i>
													<span> {location}</span>
												</div>
											</div>
											<div className="exp-info">
												<i class="fa-solid fa-user-graduate"></i>
												<span> {description}</span>
											</div>
											<div className="r-tooltip"></div>
										</motion.div>
										<motion.div
											className="icon-out-layer"
											initial={{ scale: 0, opacity: 0 }}
											whileInView={{
												scale: 1,
												opacity: 1,
												translateX: "-47%",
												originX: 0,
											}}
											viewport={{
												amount: 1,
												once: true,
											}}
											transition={{ duration: 0.5 }}
										>
											<i class="fa-solid fa-graduation-cap"></i>
										</motion.div>
										<p className="date">{date}</p>
									</div>
								</>
							);
						},
					)}
				</div>
			</div>
		</>
	);
};

export default Experince;
