import React from 'react';

class Dog extends React.Component {
    componentWillMount() {
        // this.props.handleImageLoaded('loading')
    }

    render() {
        return (
            <img 
                alt='Random Dog' 
                src={this.props.imageURL}
                style={{margin: '5px', height: '250px', border: '2px black solid'}}
                // onLoad={() => this.props.handleImageLoaded('finished')}
             />
        )
    }
}

export default Dog