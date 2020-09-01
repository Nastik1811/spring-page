import { LOGIN_REQUEST } from "../reducers/isAuthorized";
import { SET_PROJECTS } from "../reducers/projects";

export const login = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: {username, password}
})

export const setProjects = (projects) => ({
    type: SET_PROJECTS,
    payload: {projects}
})