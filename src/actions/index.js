import { LOGIN_REQUEST } from "../reducers/isAuthorized";

export const login = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: {username, password}
})