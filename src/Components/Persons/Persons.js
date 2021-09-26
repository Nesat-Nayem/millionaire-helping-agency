import React from 'react';
import './Persons.css'
const Persone = (props) => {
    const{name, email, picture} = props.person

console.log(props.person);
    
    return (
      
            
        <div className="col-md-4">
            <div className="card" style={{'width': '18rem'}}>
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{email}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
       
    );
};

export default Persone;