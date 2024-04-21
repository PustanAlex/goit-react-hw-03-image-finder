import React, { Component } from "react";
import Button from './Button/Button'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
import ImageGallery from './ImageGallery/ImageGallery'

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <ImageGallery />
      </div>
    );
  }
}

export default App;
