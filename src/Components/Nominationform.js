import React , { useState } from 'react';
import { withRouter,Redirect} from "react-router-dom";

import Spinner from './Spinner';
const Nominationform = (props) => {
    const [loading , setLoader] = useState(true);
    const [field , setField] = useState({region:"",name:"",email:"",project:"",task:"",situation:""});
    const setInput = (e) => {
        
        setField({...field , [e.target.name] : e.target.value});
        
    }
    const sendMail = (e) => {
        console.log("dfds")
        e.preventDefault();
        // {loading ? window.location.href = "/spinner": <ResultsTable results={data} />}
        setLoader(false);

        let response = fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(field),
        }).then(function(response) {
            setLoader(true);
            console.log('SUCCESS!', response.status, response.text);
            // <Redirect to={{pathname: '/message', state:{data:  field} }} />
            // <Redirect to={{ pathname: '/message', data: { field } }} />
            // window.location.href = "/message"
            props.history.push({ pathname: '/message', state:{data:  field}  })
        }, function(error) {
                console.log('FAILED...', error);
        });
    }
    return (
        < >
        
        {loading ?  <form onSubmit={(e) => sendMail(e)}>
            <h1>Nomination Form</h1>
            <div className="form-group">
                <label htmlFor="exampleInputNominee">Nominee Region</label>
                <input type="text" className="form-control"  name="region" value={field.region} onChange={(e) => setInput(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputNominee">Nominee*</label>
                <input type="text" className="form-control"  name="name" value={field.name} onChange={(e) => setInput(e)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nominee Email(*)</label>
                <input type="email" className="form-control" name="email" value={field.email} onChange={(e) => setInput(e)} required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputNominee">Summarize the Situation(*)</label>
                <input type="text" className="form-control"  name="situation" value={field.situation} onChange={(e) => setInput(e)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputNominee">Project/Initiative/Customer(*)</label>
                <input type="text" className="form-control"  name="project" value={field.project} onChange={(e) => setInput(e)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputNominee">Describe the task involved(*)</label>
                <input type="text" className="form-control"  name="task" value={field.task} onChange={(e) => setInput(e)} required/>
            </div>
            <button type="submit">submit</button>
        </form>  : <Spinner /> }
        </>
    )
    
}
export default withRouter(Nominationform);