import React from 'react';
import './17.2 card-list.styles.css'
import {Card} from "../card/card.component";

export const CardList = props => (
    <div className="card-list">
        {props.cardMon.map(monst => <Card key={monst.id} monst = {monst}/>)}
    </div>
);
