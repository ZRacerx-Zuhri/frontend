import React, { Component } from 'react'
import {connect} from "react-redux"
import {logout} from "../action"

class Header extends Component{


    tologout = ()=> {
        this.props.logout()
    }


    render(){return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Setting
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button className="btn btn-danger mx-auto" onClick={this.tologout} >Logout</button>
  </div>
</div>

  </div>
</nav>
        </React.Fragment>)

    }
}

export default connect(null, {logout}) (Header)