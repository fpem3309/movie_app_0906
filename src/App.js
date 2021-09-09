import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("I'm constructor");
  }

  state ={
    count : 0
  };


  add = () => {
    this.setState(current => ({ count : current.count +1}));
  };

  minus = () => {
    this.setState(current => ({ count : current.count -1}));
  };
  componentDidMount(){
    console.log("I'm component did mount");
  }
  componentDidUpdate(){
    console.log("I'm did update");
  }
  componentWillUnmount(){
    console.log("I'm will unmount");
  }

  render(){
    console.log("I'm rendering");
    return(
      <div>
       <h1>The number is {this.state.count}</h1>
       <button onClick={this.add}>Add</button>
       <button onClick={this.minus}>minus</button>
      </div>
      );
  }

}

export default App;
