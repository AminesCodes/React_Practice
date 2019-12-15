import React from 'react';

const Dog = props => {
    return (
        <img 
            alt='Random Dog' 
            src={props.imageURL}
            style={{margin: '5px', height: '250px', border: '2px black solid'}}>
        </img>
    )
}

export default Dog