import React from 'react'
import './AbotUs.css'
import {Link} from 'react-router-dom'

export default function AboutUs(props) {
  return (
    <div>
      <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{textAlign:"center" ,color:props.mode==='dark'?'white':'grey'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
      <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <Link to='/contact'><p><button className="button" >Contact</button></p></Link>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}
