import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../feature/user/user-slice";
// import logger from "redux-logger"
// const { biscuitSlice } = require("../feature/biscuit/biscuit-slice");
// const { cakeSlice } = require("../feature/cake/cake-slice");

const store = configureStore({
  reducer: {
    // cake: cakeSlice.reducer,
    // biscuit: biscuitSlice.reducer,
    user: userSlice.reducer
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
});

export default store;
