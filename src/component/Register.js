import React, { Component } from 'react'
import axios from "../config/axios"
import notiflix from "notiflix-react"
import {Redirect} from "react-router-dom"

class Register extends Component{


    state ={
        redirect : false
    }


    toLogin = ()=>{
        if(this.state.redirect === true) return <Redirect to="/login"/>
    }

    //Register
    register = ()=>{


        if(this.email.value === "" || this.username.value===""||this.pass.value==="")
        return notiflix.Report.Failure("Registration Failed",
              "data tidak lengkap",
              "Ok")

      axios.post("/user",{username :this.username.value,email:this.email.value}).then(res => {
          if(res.data.length > 0)return notiflix.Report.Failure("Registration Failed",
              "username atau email sudah digunakan",
              "Ok")

        axios.post("/register",{
            username: this.username.value,
            email: this.email.value,
            password:this.pass.value
        }).then(result => {
            if(typeof(result.data)=="string")
            return notiflix.Report.Failure("Registration Failed",
              "alamat email tidak sesuai",
              "Ok")

              notiflix.Report.Success("Registration Success",
              "Thank You",
              "Ok")
              this.setState({redirect: true})

        }).catch(err => { console.log(err)})

      }).catch(err => { console.log(err)})
    }



    render(){
        return (
            <React.Fragment>
            {this.toLogin()}
            <div className="container" style={{marginTop:'10%'}}>
           <div className="row ">
            <div className="col-sm-4 mx-auto" style={{borderStyle:"solid",borderWidth:"2px",borderColor:"green",borderRadius:"20px"}}>
            <div style={{textAlign:"center",fontSize:"25px"}}>Register Now</div>
        <form>
            <div className="form-group my-3">
                <label htmlFor="inputemail">Email address</label>
                <input type="email" className="form-control" id="inputemail"  placeholder="email" ref={input => { this.email = input}}/>
            </div>
             <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username"  placeholder="username" ref= { input =>{this.username = input}}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputpass">Password</label>
                <input type="password" className="form-control" id="inputpass" placeholder="Password" ref={input => {this.pass =input}}/>
            </div>
            <div style={{marginBottom:"15px"}}>
                you have account? <a href="/login">login here</a>
                </div>

                <button type="button" className="btn btn-primary" style={{marginBottom:"30px"}} onClick={this.register }>Register</button>
        </form>
            </div>

           </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Register