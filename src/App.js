import React from 'react';
import Header from './components/Header';
import "./style/App.css";
import TravelCard from './components/TravelCard';
import data from './data/data.js';

export default function App(){
    const cards = data.map(item => {
        return(
            <div>
            <TravelCard
                key = {item.id}
                {...item}
            />
            <hr/>
            </div>
        )
    })

    return (
        <div>
            <Header/>
            <div className='card-container'>
                {cards}
            </div>
        </div>
    )
}