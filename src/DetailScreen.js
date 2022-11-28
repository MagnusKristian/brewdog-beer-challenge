import React,{Component} from "react";

// export class DetailScreen extends Component{

// render(){
//   var {isLoaded, items} = this.state;
//   if(!isLoaded){
//     return <div>Loading.... </div>;
//   }
//   return(
//     <>
//     <h1>Beer detail screen: </h1>
//     <img src={{}}/>

//     <ul>
//       {items.map(item =>(<li key={item.id} style={{width:"500px", border:"1px solid black", float:"left", margin:"10px"}}>
//         <img src={item.image_url} style={{height:"100px", marginLeft:"50%" }}/>
//         <br/>
//         <b>Name: {item.name}</b>
//         <br/>
//         <p>ABV: {item.abv}</p>
//         <br/>
//         <p>Description: {item.description}
//         </p>
//       </li>))}
//     </ul>
//     </>
    
//   )
// }
// }


export function BeerDetails(imageUrl,name,abv,description,hops,malts,methods){
  return(
  <>
  <img src={imageUrl} style={{height:"100px", marginLeft:"50%" }}/>
        <br/>
        <b>Name: {name}</b>
        <br/>
        <p>ABV: {abv}</p>
        <br/>
        <p>Description: {description}</p>
        <br/>
        <b>List of hops: </b>
        <ul>
        {hops.forEach(hop => {
          <li>{console.log("HOP: " +hop.name)}</li>
        })}
      </ul>
        <br/>
        <b>List of malts: </b>
        <ul>
        {malts.forEach(malt => {
          <li>{console.log("MALT: "+malt.name)}</li>
        })}
      </ul>

        <br/>
        <b>List of methods: </b>
        <ul>
        <li>Fermentation: {console.log("FERMENTATION: "+methods.fermentation.temp.value)} {console.log(" -TEMP: "+methods.fermentation.temp.unit)}</li>
        <li>mash_temp: {console.log("MASH: "+methods.mash_temp[0].temp.value)} {console.log(" -TEMP: "+methods.mash_temp[0].temp.unit)}</li>
        <li>twist: {console.log("TWIST: "+methods.twist)}</li>
      </ul>
  </>
  )
}