import React,{Component} from "react";
import { ReactDOM } from "react";

export class FetchApi extends Component{
constructor(props){
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
  }
}
componentDidMount(){
  fetch("https://api.punkapi.com/v2/beers/random")
  .then(res => res.json())
  .then(json =>{
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
    <div>
      {items.map(item =>(<p key={item.id}>{item.name}</p>))}
    </div>
  )
}
}