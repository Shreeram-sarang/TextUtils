import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
// import { Router,link } from 'react-router-dom'


export default function Navbar(props){
    return (    
      <>  
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            <div class="form-check form-switch d-flex ms-auto">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode} style={{ backgroundColor: props.mode=='dark' ? 'black' : 'white' }}/>
              <label className="form-check-label" for="flexSwitchCheckDefault" style={{ marginLeft: "10px",color:'grey' }}>Mode</label>
            </div>

          </div>
        </div>
      </nav>
      </> 
    )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'set title',
    about:'about'
}
