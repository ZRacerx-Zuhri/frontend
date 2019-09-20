import React, { Component } from 'react'
import {connect} from "react-redux"
import {onlogin} from "../action"
import {Redirect} from "react-router-dom"
import "../style.css"


class Login extends Component{

    tologin = ()=> {
        const username = this.username.value
        const password = this.pass.value
        this.props.onlogin(username,password)
    }



    render(){
        if(this.props.username)return <Redirect to="/"/>
        return(
    <React.Fragment>
            <div className="container" style={{marginTop:'10%'}}>
           <div className="row">
            <div className="col-sm-4 mx-auto" style={{borderStyle:"solid",borderWidth:"2px",borderColor:"green",borderRadius:"20px"}}>
            <div style={{textAlign:"center",fontSize:"25px"}}>Login</div>
        <form>
             <div className="form-group">
                <label htmlFor="username">username</label>
                <input type="text" className="form-control" id="username"  placeholder="username" ref={input => {this.username = input}}/>
            </div>
            <div className="form-group">
                <label htmlFor="pass">password</label>
                <input type="password" className="form-control" id="pass" placeholder="Password" ref={input => {this.pass = input}}/>
            </div>
                <div style={{marginBottom:"15px"}}>
                you don't have account? <a href="/register">Register here</a>
                </div>
                <button type="button" className="btn btn-success" style={{marginBottom:"25px"}} onClick={this.tologin}>Login</button>
        </form>
            </div>

           </div>
            </div>
    </React.Fragment>
        )
    }
}

const mps = (state) => {
    return{
        username : state.auth.username
    }
}

export default  connect (mps,{onlogin}) (Login)