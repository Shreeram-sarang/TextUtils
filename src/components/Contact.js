import React from 'react'
import {Link} from 'react-router-dom'

function Contact(props){
    return(
           <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center" style={{color:props.mode=='dark'&&'white'}}>
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" class="btn btn-primary">Go Home</Link>
            </div>
        </div>
    )
}

export default Contact