import React, { useEffect, useState } from 'react';
import Persons from '../Persons/Persons';
import Details from '../Project-details/Details';
import './Project.css'


const Project = () => {

    const[persons, setPersons] = useState([])

    useEffect(() => {

        fetch('personn.json')
        .then(res => res.json())
       
        // .then(data => console.log(data.results.gender))
        .then(data => setPersons(data.results))


    }  ,[])

    return (
        <div>
             <h1>hello from project</h1>

            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        
                        {
                            persons.map(person => <Persons 
                                key={person.id}
                                person={person}
                                ></Persons>)
                        }

                        
                    </div>

                    
                    
                    
                </div>

                <div className="col-md-3">
                    <Details></Details>
                </div>

            </div>



           
            
          
        </div>
    );
};

export default Project;