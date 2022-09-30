import store from "./app/store";
import { fetchUser } from "./feature/user/user-slice";
// import { biscuitSlice } from "./feature/biscuit/biscuit-slice";
// import { cakeSlice } from "./feature/cake/cake-slice";

console.log("initial state", store.getState().user);

const unsubscribe = store.subscribe(() => {
  console.log("after dispatch", store.getState().user);
});

store.dispatch(fetchUser());
unsubscribe();
