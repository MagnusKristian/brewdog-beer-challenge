import React,{Component} from "react";
let beerId = 1;
export class DisplaySingleTwo extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      beerIds: 3,
    }
  }

  componentDidMount(){
    fetch("https://api.punkapi.com/v2/beers/random")
    //fetch("https://api.punkapi.com/v2/beers/"+this.state.beerIds)
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
    return (
    <>
    {console.log(items)}
      <div id="detailScreen" style={{border:"1px solid black", alignItems:"center"}}>
        {items.map(item =>(
        <li key={item.id} style={{width:"500px", border:"1px solid black", float:"left", margin:"10px"}}>
          <img src={item.image_url} alt="BEER" style={{height:"100px", marginLeft:"50%" }}/>
          <br/>
          <b>Name: {item.name}</b>
          <br/>
          <p>ABV: {item.abv}</p>
          <br/>
          <p>Description: {item.description}</p>
          <br/>
          <b>List of hops: </b>
          <ul>
            {item.ingredients.hops.forEach((hop) => {
              console.log("hop name: "+hop.name);
              <li>Hop name:</li>
            })}
          </ul>
          <br/>
          <b>List of malts: </b>
          <ul>
            {item.ingredients.malt.forEach(malt => {
              <li>{malt.name}</li>
            })}
          </ul>
          <br/>
          <b>List of methods: </b>
          <ul>
            <li>Fermentation: {item.method.fermentation.temp.value} {item.method.fermentation.temp.unit}</li>
            <li>mash_temp: {item.method.mash_temp[0].temp.value} {item.method.mash_temp[0].temp.unit}</li>
            <li>twist: {item.method.twist}</li>
          </ul>
        </li>))}
      </div>     
    </>)
  }
}





// https://api.punkapi.com/v2/beers/1