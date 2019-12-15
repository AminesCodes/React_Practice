import React from 'react';

const BreedList = (props) => {
    const allBreeds = [<option key='' value=''>--Select a Breed--</option>]

    if (props.breeds) {
        for (let breed in props.breeds) {
            allBreeds.push(<option key={breed} value={breed}>{breed}</option>)
        }
    }

    const handleSelectChange = event => {
        const selectedBreed = event.target.value
        props.handleChange(selectedBreed)
    }

    const handleSubBreedSelectChange = event => {
        const selectedSubBreed = event.target.value
        props.handleSubBreedChange(selectedSubBreed)
    }

    
    const handleNewDogButton = () => {
        props.handleClick(props.breed, props.subBreed)
    }

    const handleInputChange = event => {
        props.handleNumberChange(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const numberOfDogs = event.target.firstChild.value

        props.handleSubmitInput(props.breed, props.subBreed, numberOfDogs)
    }

    let allSubBreeds = null;

    if (props.subBreeds.length) {
        const subBreeds = [...props.subBreeds]
        subBreeds.unshift('')
        
        allSubBreeds = <select onChange={handleSubBreedSelectChange} value={props.subBreed}>
                {subBreeds.map(subBreed => <option key={subBreed} value={subBreed}>{subBreed}</option>)}
            </select>
    }
        
    return (
        <>
            <select onChange={handleSelectChange} value={props.breed}>
                {allBreeds}
            </select>
            {allSubBreeds}
            <form onSubmit={handleFormSubmit}>
                <input type="number" onChange={handleInputChange} value={props.value} min='1' max='50'/>
            </form>
            <br />
            <button onClick={handleNewDogButton}>New Dog</button>
            <button onClick={props.handleResetButton}>Reset</button>
        </>
    ) 
}

export default BreedList;