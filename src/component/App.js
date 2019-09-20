import React,{Component} from 'react';
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import {Route,BrowserRouter} from "react-router-dom"
import Cookies  from "universal-cookie"
import {connect} from "react-redux"
import {keeplogin} from "../action"



class App extends Component{

  componentWillMount(){
     const cookie = new Cookies()
     const user =cookie.get("users")
     if(user){
      this.props.keeplogin(user)
     }
  }



  render(){
    return (
      <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      </BrowserRouter>
   )
  }
}

export default connect(null, {keeplogin})(App)
