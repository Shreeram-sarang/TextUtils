import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Alert(props){
return (
    <div className="alert alert-success" role="alert">
{props.msg}
</div>
)
    }

Alert.defaultProps={
    msg:"this is an alert"
}
Alert.propTypes = {
    msg: PropTypes.string
};
