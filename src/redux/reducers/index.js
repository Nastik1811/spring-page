import { combineReducers } from "redux";
import isAuthorized from "./isAuthorized";
import projects from "./projects";

export default combineReducers({isAuthorized, projects})

