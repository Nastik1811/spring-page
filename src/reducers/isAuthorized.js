export const LOGIN_REQUEST = "LOGIN_REQUEST"

export default (state = false, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            const {username, password} = action.payload
            if(username === "admin" && password === "1234"){
                return true
            }
            else{
                return false
            }
        default:
            return state
    }
}