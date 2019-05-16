import React from 'react';



export default class CardSmall extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        primary: props.primary,
        secondary: props.secondary,
        cta: props.cta
      }
      this.className = props.className;
      this.heading = props.heading;
      this.cta = props.cta;
    }
  
    componentDidMount() {
      if(this.className === 'holds' || this.className === 'to-do') {
        this.setState({
          secondary: null
        })
      }

      this.setState({
        cta: this.state.cta
      })
    }
  
  
    render() {
      
      return (
          <section className={`card ${this.className}`}>
            <article className="card__wrapper">
              <h2 className="card__heading">{this.heading}</h2>
              <section className="card__details">
                <h2 className="details__primary">{this.state.primary}</h2>
                <h2 className="details__secondary">{this.state.secondary}</h2> 
              </section>
            <h2 className="cta"><img src={require("./assets/arrow-with-circle.svg")}/></h2>
            </article>
          </section>
      )
    }
}

