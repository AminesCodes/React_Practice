import axios from 'axios';
import React from 'react';
import './App.css';

import Dog from './Components/Dog';
import BreedList from './Components/BreedList'


class App extends React.PureComponent {
  state = {
    imageURLs: [],
    breeds: null,
    subBreeds: [],
    targetBreed: '',
    targetSubBreed: ''
  }

  async componentDidMount() {
    try {
      const {data} = await axios.get('https://dog.ceo/api/breeds/list/all')
      this.setState({breeds: data.message})
      this.getDogPicture(null, null)
    } catch (err) {
      console.log(err)
    }
  }

  handleClickNewDogButton = (breed, subBreed) => {
    this.getDogPicture(breed, subBreed)
  }

  getDogPicture = async (breed, subBreed) => {
    let baseURL = 'https://dog.ceo/api/breeds/image/random/10'

    if (breed && subBreed) {
      baseURL = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/10`
    } else if (breed) {
      baseURL = `https://dog.ceo/api/breed/${breed}/images/random/10`
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

    this.getDogPicture(breed, null)
  }

  handleSubBreedSelectChange = subBreed => {
    this.setState({targetSubBreed: subBreed})

    this.getDogPicture(this.state.targetBreed, subBreed)
  }

  //########################### RENDER #########################
  render() {
    const allImages = this.state.imageURLs.map(url => <Dog key={url} imageURL={url}/>)
    
    return (
      <div className="App">
        <BreedList 
            breeds={this.state.breeds} 
            breed={this.state.targetBreed}
            subBreeds={this.state.subBreeds}
            subBreed={this.state.targetSubBreed}
            handleChange={this.handleSelectChange} 
            handleSubBreedChange={this.handleSubBreedSelectChange}
            updateImage={this.getDogPicture}
            handleClick={this.handleClickNewDogButton} 
        />
        <br />

        {allImages}
      </div>
    );
  }
}

export default App;
