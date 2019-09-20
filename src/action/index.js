
import axios from '../config/axios'
import notiflix from "notiflix-react"
import Cookies  from "universal-cookie"

export const onlogin = (username,password)=>{

const cookie = new Cookies()

 return dispatch => {
     axios.post("/login",{username:username,Password:password}).then(
        res => {if(typeof(res.data)==="string"){
        return notiflix.Report.Failure("Login Failed",
              "username or password not found",
              "Ok")}
       else{
        cookie.set("users" , {username:res.data.username})
        dispatch({type:"LOGIN_SUCCESS",payload:{username:res.data.username}})}
    })

 }
}

export const logout = ()=>{
    const cookie = new Cookies()
    cookie.remove("users")
    return {
        type:"LOGOUT",
        payload : {
            username : ""
        }
    }
}

export const keeplogin = (user)=>{
    return {
        type:"LOGIN_SUCCESS",
        payload :{
            username:user.username
        }
    }
}



