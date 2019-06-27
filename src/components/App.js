import React from 'react';
import '../styles/App.css';
import List from './List';

class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
  }
}

deleteItem = (list, ids) => {
  console.log('delete item ran', list, ids);
  // const newList = list.cardIds.filter(card => card !== ids)
  // console.log(newList);
  const newAllCards = this.omit(this.state.allCards, ids)
  this.setState({
    lists: this.state.lists.map((item) => item ? {id: item.id, header: item.header, cardIds: item.cardIds.filter(card => card !== ids)} : item),
    allCards: newAllCards
    })
    console.log(newAllCards, this.state.allCards);

    
}

newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}


moveCard = (list) => {
  const card = this.newRandomCard();
  const newList = [...list.cardIds, card.id];

  this.setState({
    allCards: {...this.state.allCards, [card.id]: card},
    lists: this.state.lists.map((aList) => aList === list ? {...aList, cardIds: newList} : aList)
  })
}


  render() {
    const lists = this.state.lists.map(list => {
      const cards = list.cardIds.map(id => this.state.allCards[id]);

      return (
        <List
          key={list.id}
          list={list}
          header={list.header}
          cards = {cards}
          cardIds = {list.cardIds}
          deleteCard = {this.deleteItem}
          newCard = {this.moveCard}
        />
      )
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>
            Trelloyes!
          </h1>
        </header>
        <div className="App-list">
          {lists}
        </div>
      </main>
    )
  }
}

export default App;