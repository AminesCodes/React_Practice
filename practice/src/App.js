import axios from 'axios';
import React from 'react';
import './App.css';

import Dog from './Components/Dog';


class App extends React.PureComponent {
  state = {
    imageURL: ''
  }

  handleClickNewDog = () => {
    this.getDogPicture()
  }

  getDogPicture = async () => {
    const baseURL = 'https://dog.ceo/api/breeds/image/random'

    try {
      // const {data} = await axios.get(baseURL)
      // this.setState({imageURL: data.message})
      const {data: {message}} = await axios.get(baseURL)
      this.setState({imageURL: message})
    } catch (err) {
      console.log(err)
    }
  }

  //########################### RENDER #########################
  render() {
    return (
      <div className="App">
        <Dog handleClick={this.handleClickNewDog} imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
