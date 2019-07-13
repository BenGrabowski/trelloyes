import React from 'react';
import Card from './Card';

function List(props) {

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                <Card 
                    title={props.title}
                    content={props.content}
                />
            </div>
        </section>
    );
}

export default List;