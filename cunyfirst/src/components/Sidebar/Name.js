import React from 'react';
import './Name.scss'

export default class Name extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
    }

    render() {
        return (
            <button className='button__sidebar'>{this.name}</button>
        )
    }
}