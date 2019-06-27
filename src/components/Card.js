import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <button onClick={() => {
          console.log(this.props.list, this.props.cardIds)
          this.props.deleteCard(this.props.list, this.props.cardIds)
        }}
        type="button">delete</button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Card;