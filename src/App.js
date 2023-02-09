import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai, { COLOR_MODEL } from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'dd69578531d6428da173720339b0a6ff'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.COLOR_MODEL, 
      this.state.input)
      .then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
    );
  }

  render() {
  return (
    <div className="App">
      <ParticlesBg type="square" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}


export default App;
