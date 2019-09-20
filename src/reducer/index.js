import {combineReducers} from "redux"

const instate = {
    username : ""
}

const authReducer = (data = instate,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
           return{...data,
            username : action.payload.username
           }
        case "LOGOUT":
            return {
                ...data,
                username :action.payload.username
            }
        default:
            return data
    }
}


export default combineReducers({
        auth : authReducer
})