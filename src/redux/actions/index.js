import { LOGIN_REQUEST, LOGOUT } from "../reducers/isAuthorized";
import { SET_PROJECTS } from "../reducers/projects";

export const login = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: {username, password}
})


export const logout = () => ({
    type: LOGOUT
})

export const setProjects = (projects) => ({
    type: SET_PROJECTS,
    payload: {projects}
})
