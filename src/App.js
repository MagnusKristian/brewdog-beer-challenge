
import  {FetchApi}  from "./FetchApi.js";
import {BeerList} from "./BeerList.js"
import  {BeerDetails} from "./DetailScreen.js";
import {DisplaySingleBeer} from "./DisplaySingleBeer.js";
import { Toggle } from "./oneOrTheOther.js";
import "./style.css";
//import { BeerListTwo } from "./BeerListTwo.js";
import {DisplaySingleTwo} from "./DisplaySingleTwo";



function App() {
  const singleBeer = <></>;
  const multipleBeers = <></>;
  return (
    <div className="App">
      <p>Hello</p>
      <div>
        <BeerList/>
      </div>
    </div>
  );
}

export default App;


/* <FetchApi/>
        <BeerList/>
         */




//         import React from 'react';

// export class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         {this.props.isPrecise
//           ? this.state.date.toISOString()
//           : this.state.date.toLocaleTimeString()}
//       </div>
//     );
//   }
//   componentDidMount() {
//     const oneSecond = 1000;
//     this.intervalID = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, oneSecond);
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
// }