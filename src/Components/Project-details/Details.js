import React from 'react';
import './Details.css'
const Details = (props) => {
    const {invest} = props || {}

    const totalInvestValue= (pevValue,currentValue)=> Number(pevValue)+Number(currentValue.invest)

    const totalInvest = invest.reduce( totalInvestValue ,  0)

    return (
        <div className="details ms-3">
            <h5 className="person-color"><i className="fas fa-user-alt"></i> Total Richest Person : {invest.length}</h5>
            <h4 className="total-invest"> Total Invest: $ {totalInvest}M</h4>

            <ul>
                {
                    invest.map(person => <h5><i className="fas fa-user"></i> {person.name}</h5>)
                }
            </ul>
            
        </div>
    );
};

export default Details;