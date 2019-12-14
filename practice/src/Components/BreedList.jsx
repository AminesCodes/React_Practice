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


    if (props.subBreeds.length) {
        const subBreeds = [...props.subBreeds]
        subBreeds.unshift('')
        
        const allSubBreeds = subBreeds.map(subBreed => <option key={subBreed} value={subBreed}>{subBreed}</option>)
        return (
            <>
                <select onChange={handleSelectChange} value={props.breed}>
                    {allBreeds}
                </select>
                <select onChange={handleSubBreedSelectChange} value={props.subBreed}>
                    {allSubBreeds}
                </select>
                <button onClick={handleNewDogButton}>New Dog</button>
            </>
        )
    } else {
        return (
            <>
                <select onChange={handleSelectChange}>
                    {allBreeds}
                </select>
                <button onClick={handleNewDogButton}>New Dog</button>
            </>
        )
    }
}

export default BreedList;