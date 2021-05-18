import React from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"
import EmailMessage from './EmailMessage';
import Nominationform from './Nominationform';
const Routepath = () => {
    return (
        <Router>
            {/* <switch> */}
            <Route path='/message' component={EmailMessage} /> 
            <Route exact path='/' component={Nominationform} /> 
            {/* </switch> */}
        </Router>
        
    )
}
export default Routepath;