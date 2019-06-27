import React from 'react';
import '../styles/List.css';

import Card from './Card';


class List extends React.Component {

  render() {
    const cards = this.props.cards.map(card => {
      return <Card
        key={card.id}
        list={this.props.list}
        title={card.title}
        content={card.content}
        cardIds = {card.id}
        deleteCard = {this.props.deleteCard}
      />
    });
    
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
        </div>
      </section>
    )
  }
}

export default List;