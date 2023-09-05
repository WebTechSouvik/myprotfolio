import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { links } from "../../Data.js";
import { useSelector, useDispatch } from "react-redux";
import { setbg, setmove } from "../../store/Slice.js";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
	const { activeSection, currentPos, val } = useSelector(
		(state) => state.nav,
	);

	const dispatch = useDispatch();
	const calldispatch = (name, i) => {
		dispatch(setmove());
		dispatch(setbg([name, i]));

		setTimeout(() => {
			dispatch(setmove());
		}, 1000);
	};

	return (
		<>
			<motion.nav
				className="main-nav"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<ul className="nav-itmes">
					{links.map((cur, i) => {
						return (
							<motion.li
								className="nav-item"
								key={cur.hash}
								initial={{ y: -100 }}
								animate={{ y: 0 }}
								transition={{ delay: i * 0.07 }}
							>
								<Link
									className="link"
									to={cur.hash}
									style={
										activeSection == cur.name
											? { color: "rgba(255,255,255,1)" }
											: {}
									}
									onClick={() => calldispatch(cur.name, i)}
									smooth
								>
									{cur.name}
								</Link>

								{activeSection == cur.name && (
									<motion.div
										className="bg-nav"
										initial={{ x: val }}
										animate={{ x: 0 }}
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									></motion.div>
								)}
							</motion.li>
						);
					})}
				</ul>
			</motion.nav>
		</>
	);
};

export default Navbar;
