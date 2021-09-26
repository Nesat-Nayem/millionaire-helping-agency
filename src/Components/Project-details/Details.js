import React from 'react';
import './Details.css'
const Details = (props) => {
    const {invest} = props || {}

    const totalInvestValue= (pevValue,currentValue)=> Number(pevValue)+Number(currentValue.invest)

    const totalInvest = invest.reduce( totalInvestValue ,  0)

    return (
        <div>
            <p><i class="fas fa-shopping-cart"></i>:{invest.length}</p>
            <h4> Total Invest Amount: $ {totalInvest}M</h4>

            <ul>
                {
                    invest.map(person => <h5><i class="fas fa-user"></i> {person.name}</h5>)
                }
            </ul>
            
        </div>
    );
};

export default Details;