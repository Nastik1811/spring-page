export const SET_PROJECTS= "SET_PROJECTS"
export const ADD_PROJECT = "ADD_PROJECT"

export default (state = null, action) => {
    switch(action.type){
        case SET_PROJECTS:
            const projects = action.payload.projects
            return projects
        case ADD_PROJECT:
            return [...state, action.project]
        default:
            return state
    }
}

