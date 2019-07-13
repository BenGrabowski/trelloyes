import React from 'react';
import List from './composition/List';
import STORE from './store';

function App(props) {
  const listArray = STORE.lists.map(listObject => {
    return <List 
              key={listObject.id} 
              header={listObject.header} 
              cards={listObject.cardIds}
              />
  });
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-List">
        {/* <List header={STORE.lists[0].header} 
              cards={STORE.allCards}/>
        <List header={STORE.lists[1].header}
               cards={STORE.allCards}/>
        <List header={STORE.lists[2].header}
              cards={STORE.allCards} />
        <List header={STORE.lists[3].header}
  cards={STORE.allCards} /> */}

      {listArray}
      </div>  
    </main>
  );
}

export default App;
