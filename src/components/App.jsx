import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    const API_KEY = '43501408-f2ca706ad0af36d7ba8bbed94'
    const URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

    fetch(URL) 
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data', error));
  }

  render() {
  
    return (
      <div>
       
      </div>
    );
  }
}

export default App;
