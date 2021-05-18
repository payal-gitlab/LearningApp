import React , { useState } from 'react';
const EmailMessage = (props) => {
    console.log(props.location.state.data.name)
    return (
        <h1>Hii, {props.location.state.data.name} Your Nomination form successfully sent and Acknowledgement in your email</h1>
    )
}
export default EmailMessage;