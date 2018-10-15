import { createStore } from "redux";
import reducer from "./dux/reducer";

const store = createStore(reducer);

export default store;
