import React from 'react';
import './cardList.styles.css';
import {Card} from '../card/card.component';
// Functional Component CardList
export const CardList = (props) => {
   
        return (<div className="card-list">
            {
                props.employee.map(emp => (<Card key={emp.id} employee={emp}></Card>))
            } 
        </div>
        )
        
}