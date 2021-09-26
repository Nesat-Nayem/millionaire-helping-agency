import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';
import Details from '../Project-details/Details';
import './Project.css'


const Project = () => {

    const[persons, setPersons] = useState([])

    const [invest, setInvest] = useState([])

    const handleInvest=(name) =>{
       
       const newInvest=[...invest,name]
       setInvest(newInvest)
       console.log(newInvest);
    }

    useEffect(() => {

        fetch('personn.json')
        .then(res => res.json())
       
        // .then(data => console.log(data.results.gender))
        .then(data => setPersons(data.results))


    }  ,[])

    return (
        <div>
            

            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        
                        {
                            persons.map(person => <Persons 
                                key={person.id}
                                person={person}
                                handleInvest={handleInvest}
                                ></Persons>)
                        }

                        
                    </div>

                    
                    
                    
                </div>

                <div className="col-md-3">
                    <Details
                    invest={invest}
                    ></Details>
                </div>

            </div>



           
            
          
        </div>
    );
};

export default Project;