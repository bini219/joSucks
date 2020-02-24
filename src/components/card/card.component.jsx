import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src= {`http://robohash.org/${props.monst.id}?set=set2&size=180x180`}/>
        <h2>{props.monst.name}</h2>
        <p>{props.monst.email}</p>
    </div>
)