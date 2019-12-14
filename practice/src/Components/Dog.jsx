import React from 'react';

export default class Dog extends React.Component {

    

    render() {
        return (
            <img 
                alt='Random Dog' 
                src={this.props.imageURL}
                style={{margin: '5px', height: '250px', border: '2px black solid'}}>
            </img>
        )
    }
}