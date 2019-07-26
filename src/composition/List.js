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
                id = {cardObject.id}
                index = {props.index}
                onDeleteCard = {props.onDeleteCard}
                // onRandomCard = {props.onRandomCard}
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
                <button type='button' className='List-add-button' 
                        onClick={() => props.onRandomCard(props.index)}
                        >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}

List.defaultProps = {
    onRandomCard: () => {},
}

export default List;