import { render } from '@testing-library/react';
import React from 'react';

export default class App extends React.Component {
  state = {
    loading: true,
    message: null,
  };
  async componentDidMount(){
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await  response.json();
    //console.log("Results: ", data)
    console.log("Message: ", data.message)
    this.setState({message: data.message })
  }
  render() {
    return(
      <div>
     <div> loading..</div>
     <div>{this.state.message}</div>
     <img src={this.state.message}></img>
      </div>
      

    )
  }

}

//export default App;