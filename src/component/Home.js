import React, { Component } from 'react'
import Header from "./Header"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"


import { Map, GoogleApiWrapper } from 'google-maps-react';


class Home extends Component{


    render(){

        if(!this.props.username) return <Redirect to="/login"/>
        return (<React.Fragment>
        <Header/>
            <Map
          google={this.props.google}
          zoom={8}
          style={{ width: '100%', height: '100%'}}
          initialCenter={{ lat:-6.117664, lng: 106.906349}}
        />
        </React.Fragment>)}
}

const mps = (state) => {
    return{
        username : state.auth.username
    }
}
export default connect (mps)(GoogleApiWrapper({
  apiKey: 'AIzaSyCyTUxSp987f5C4Ug0DE4MvnrDOMIEAC1M'
})(Home))