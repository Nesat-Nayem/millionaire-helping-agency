import React from 'react';
import './Persons.css'
const Persons = (props) => {
    const{name, email, picture,location, phone, invest, City} = props.person

// console.log(props.persons);
    
    return (
      
            
        <div className="col-md-4">
            <div className="card ms-3 mb-4 shadow-none p-3 mb-5 bg-light rounded card_background" style={{'width': '18rem'}}>
                <img src={picture} className="card-img-top" alt="..."/>
                <div className="card-body cart-text">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Email : {email}</p>
                    <p className="card-text">City : {City}</p>
                    <p className="card-text">Location : {location}</p>
                    <p className="card-text">Phone : {phone}</p>
                    <p className="card-text">Invest : ${invest}M</p>


                    <button 
                    onClick= {()=> props.handleInvest(props.person)}
                     className="btn btn-primary"><i className="fas fa-money-check-alt"></i> add Invest</button>
                </div>
            </div>
        </div>
       
    );
};

export default Persons;