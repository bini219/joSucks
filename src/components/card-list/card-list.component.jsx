import React from 'react';
import './17.2 card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.cardMon.map(monst => <div key={monst.id}><h2>id: {monst.id}</h2><h1>{monst.name}</h1>
        </div>)}
    </div>
);
