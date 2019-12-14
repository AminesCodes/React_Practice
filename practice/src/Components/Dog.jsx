import React from 'react';

export default class Dog extends React.Component {
    componentDidMount() {
        this.props.handleClick()
    }

    render() {
        return (
            <>
                <h1>Random Dog Pic Generator</h1>
                <img 
                    alt='Random Dog' 
                    src={this.props.imageURL}>
                    {/* style={{img: {border: '2px black solid'}}} */}
                </img>
                <br />
                <button onClick={this.props.handleClick}>New Dog</button>
            </>
        )
    }
}