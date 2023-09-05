import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "Home",
  currentPos: 0,
  val: 0,
  move: false,
};

export const Slice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setbg: (state, action) => {
      state.activeSection = action.payload[0];
      state.val = (state.currentPos - action.payload[1]) * 60;
      state.currentPos = action.payload[1];
    },
    setmove: (state) => {
      console.log(state.move);
      state.move = !state.move;
      console.log(state.move);
    },
  },
});

export const { setbg, setmove } = Slice.actions;

export default Slice.reducer;
