import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const UseInView = (element) => {
    const [isVisible, setisVisible] = useState(false);

    let options = {
        rootMargin: "100px",

        threshold: 1,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setisVisible(entry.isIntersecting);
        }, options);

        observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};
export default UseInView;
