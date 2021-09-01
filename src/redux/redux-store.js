import { combineReducers, createStore } from "redux";
import profilereducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profilereducer,
  messagePage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
