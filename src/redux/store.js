 import { createStore } from "redux";

import { store_historyReducer } from "./reducers/store_historyReducer";
export const  store = createStore(store_historyReducer)