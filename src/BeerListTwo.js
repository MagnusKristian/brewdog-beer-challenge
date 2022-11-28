import React,{Component} from "react";
import { BeerDetails } from "./DetailScreen";
import { DisplaySingleTwo } from "./DisplaySingleTwo";

const beerNum= 0;
const beerStart = <DisplaySingleTwo id={beerNum} />;

const multiple = <BeerList></BeerList>;
const single = <DisplaySingleBeer/>;

class BeerListTwo extends Component{
constructor(props){
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
    view: multiple
  }
    this.changeView = this.changeView.bind(this);  
}
changeView(){ 
  const newView = this.state.view === multiple ? single : multiple;
  this.setState({view: newView});
}
componentDidMount(){
  fetch("https://api.punkapi.com/v2/beers?page=2&per_page=4")
  .then(res => res.json())
  .then(json =>{
    console.log(json)
    this.setState({
      isLoaded: true,
      items: json,
    })
  });
}
render(){
  var {isLoaded, items} = this.state;
  if(!isLoaded){
    return <div>Loading.... </div>;
  }
  if(this.state.view === multiple){
    return(
      <>
      <button onClick={this.changeView}>change</button>
      <h1>List of beers: </h1>
      <div id="beerContainer"></div>
      <ul>
        {items.map(item =>(<li key={item.id} style={{width:"500px",borderRadius:"25px" , border:"1px solid black", float:"left", margin:"10px"}}>
          <img src={item.image_url} style={{height:"100px", marginLeft:"50%" }}/>
          <button onClick={()=>{ console.log(item.name); }}>LOG NAME</button>
          <button onClick={()=>{ BeerDetails(item.image_url,item.name,item.abv,item.description,item.ingredients.hops,item.ingredients.malt, item.method) }}>Click</button>
          <button onClick={()=>{ console.log("told you not to click this...") }}>dont click this</button>
          <br/>
          <b>Name: {item.name}</b>
          <br/>
          <p>ABV: {item.abv}</p>
          <br/>
          <p>Description: {item.description}
          </p>
        </li>))}
      </ul>
      </>
      
    )
  
  }
  

  if(this.state.view === single){
    return(
      <>
      <button onClick={this.changeView}>change</button>
      <h1>List of beers: </h1>
      <div id="beerContainer"></div>
      <ul>
        {items.map(item =>(<li key={item.id} style={{width:"500px",borderRadius:"25px" , border:"1px solid black", float:"left", margin:"10px"}}>
          <img src={item.image_url} style={{height:"100px", marginLeft:"50%" }}/>
          <button onClick={()=>{ console.log(item.name); }}>LOG NAME</button>
          <button onClick={()=>{ BeerDetails(item.image_url,item.name,item.abv,item.description,item.ingredients.hops,item.ingredients.malt, item.method) }}>Click</button>
          <button onClick={()=>{ console.log("told you not to click this...") }}>dont click this</button>
          <br/>
          <b>Name: {item.name}</b>
          <br/>
          <p>ABV: {item.abv}</p>
          <br/>
          <p>Description: {item.description}
          </p>
        </li>))}
      </ul>
      </>
      
    )
  
  }


}
}