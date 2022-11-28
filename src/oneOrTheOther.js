import React from 'react';
import ReactDOM from "react-dom";
import { BeerList } from './BeerList';
import { DisplaySingleBeer } from './DisplaySingleBeer';
import { DisplaySingleTwo } from './DisplaySingleTwo';

const green = '#39D1B4';
const yellow = '#FFD712';

const multiple = <BeerList></BeerList>;
const single = <DisplaySingleBeer/>;

export class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {view: multiple};
    this.changeView = this.changeView.bind(this);
  }
  changeView(){ 
    const newView = this.state.view === multiple ? single : multiple;
    this.setState({view: newView});
  }
  render() {
    return (
      <>
        <button onClick={this.changeView}>change</button>
        <div>{this.state.view}</div>
        
      </>
      
      // <div style={{background: this.state.view}}>
      //   <h1>
      //     Change my view
      //   </h1>
      //   <button onClick={this.changeView}>
      //     Change view
      //   </button>
      // </div>
    );
  }
}