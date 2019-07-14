import React from 'react';
import Card from './Card';
import './List.css';
// import STORE from './s'

function List(props) {
    const cardsList = props.cards.map(cardObject => {
        return (
            <Card 
                title={cardObject.title} 
                content={cardObject.content}
                key = {cardObject.id}
            />
        )
    });

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardsList}
            </div>
        </section>
    );
}

export default List;