import React from 'react'

import Dog from './Dog'

const DogContainer = (props) => {
    const allDogs = props.dogsList.map(url => <Dog key={url} imageURL={url}/>)

    return (
        <div className='DogContainer'>
            {allDogs}
        </div>
    )
}

export default DogContainer;