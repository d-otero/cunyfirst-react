import React from 'react';


export default class CardName extends React.Component {
    constructor(props) {
      super(props) 
      this.cardName = props.cardName
    } 
  
    render() {
      return (
        <h2 className="card__master--heading">{this.cardName}</h2>
      )
    }
  }