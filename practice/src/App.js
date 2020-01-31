import axios from 'axios';
import React from 'react';
import './App.css';

import DogContainer from './Components/DogContainer';
import DogForm from './Components/DogForm';
import Spinner from './Components/Spinner'


class App extends React.PureComponent {
  state = {
    imageURLs: [],
    breeds: null,
    subBreeds: [],
    number: '1',
    targetBreed: '',
    targetSubBreed: '',
    breadListLoading: true
  }

  async componentDidMount() {
    try {
      const {data} = await axios.get('https://dog.ceo/api/breeds/list/all')
      this.setState({breeds: data.message, breadListLoading: false})
      this.getDogPicture(null, null, this.state.number)
    } catch (err) {
      console.log(err)
    }
  }

  handleClickNewDogButton = (breed, subBreed) => {
    this.getDogPicture(breed, subBreed, this.state.number)
  }

  getDogPicture = async (breed, subBreed, number) => {
    if (number > 50) {
      number = 50
    }
    if (number < 1) {
      number = 1
    }

    let baseURL = `https://dog.ceo/api/breeds/image/random/${number}`

    if (breed && subBreed) {
      baseURL = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/${number}`
    } else if (breed) {
      baseURL = `https://dog.ceo/api/breed/${breed}/images/random/${number}`
    }
    
    try {
      // const {data} = await axios.get(baseURL)
      // this.setState({imageURLs: data.message})
      const {data: {message}} = await axios.get(baseURL)
      this.setState({imageURLs: message})
    } catch (err) {
      console.log(err)
    }
  }

  handleSelectChange = breed => {
    this.setState((prevState) => ({
      targetBreed: breed, 
      subBreeds: prevState.breeds[breed],
      targetSubBreed: ''
    }))

    this.getDogPicture(breed, null, this.state.number)
  }

  handleSubBreedSelectChange = subBreed => {
    this.setState({targetSubBreed: subBreed})

    this.getDogPicture(this.state.targetBreed, subBreed, this.state.number)
  }

  handleNumberOfDogs = number => {
    this.setState({number: number})
  }

  handleResetButton = () => {
    this.setState({
      number: 1,
      targetBreed: '',
      targetSubBreed: ''
    })
  }

  handleSubmit = (breed, subBreed, number) => {
    this.getDogPicture(breed, subBreed, number)
  }


  //########################### RENDER #########################
  render() {
    let formContainer = <Spinner />

    if (!this.state.breadListLoading) {
      formContainer = <DogForm 
            breeds={this.state.breeds} 
            breed={this.state.targetBreed}
            subBreeds={this.state.subBreeds}
            subBreed={this.state.targetSubBreed}
            handleChange={this.handleSelectChange} 
            handleSubBreedChange={this.handleSubBreedSelectChange}
            updateImage={this.getDogPicture}
            handleClick={this.handleClickNewDogButton} 
            handleNumberChange={this.handleNumberOfDogs}
            value={this.state.number}
            handleResetButton={this.handleResetButton}
            handleSubmitInput={this.handleSubmit}
          />
    }

    return (
      <div className="App">
        {formContainer}
        <br />
        <hr />

        <DogContainer dogsList={this.state.imageURLs} />
      </div>
    );
  }
}

export default App;
