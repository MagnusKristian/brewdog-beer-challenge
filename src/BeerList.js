import React,{Component} from "react";
import { BeerDetails } from "./DetailScreen";

export class BeerList extends Component{
constructor(props){
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
  }
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
  return(
    <>
    <h1>List of beers: </h1>
    <ul>
      {items.map(item =>(<li key={item.id} style={{width:"500px", border:"1px solid black", float:"left", margin:"10px"}}>
        <img src={item.image_url} style={{height:"100px", marginLeft:"50%" }}/>
        <button onClick={()=>{ console.log(item.name); }}>Click</button>
        <button onClick={()=>{ BeerDetails(item.image_url,item.name,item.abv,item.description,item.ingredients.hops,item.ingredients.malt, item.method) }}>Click</button>
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