import React from 'react';
import List from './composition/List';
import './App.css';

function App(props) {
  const listArray = props.store.lists.map(listObject => {
    return <List 
              key={listObject.id} 
              header={listObject.header} 
              cards={listObject.cardIds.map(id => props.store.allCards[id])}
              />
  });
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listArray}
      </div>  
    </main>
  );
}

export default App;
