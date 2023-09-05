import { useState, useEffect } from "react";
import UseInView from "./UseInView.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setbg } from "../store/Slice.js";

const UseMove = (ref, name, index) => {
    const { activeSection, currentPos, val, move } = useSelector(
        (state) => state.nav,
    );

    const isVisible = UseInView(ref);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isVisible && !move) {
            console.log(move);
            dispatch(setbg([name, index]));
        }
    }, [isVisible]);
};
export default UseMove;
