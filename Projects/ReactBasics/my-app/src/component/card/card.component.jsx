import React from 'react';
import './card.style.css';
export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="employess" src={`https://robohash.org/${props.employee.id}?set=set2&size=180x180`}></img>
            <h2>{props.employee.name}</h2>
            <p>{props.employee.email}</p>
        </div>
    )
}