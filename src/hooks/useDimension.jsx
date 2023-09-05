import React, { useState, useEffect } from "react";

const useDimension = () => {
	const getDimension = () => {
		const { innerWidth: width } = window;

		return width;
	};
	const [width, setWidth] = useState(getDimension());

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWidth(getDimension());
		});
		return () => {
			window.removeEventListener("resize", () => {
				setWidth(getDimension());
			});
		};
	}, []);

	return width;
};

export default useDimension;
