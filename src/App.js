
import  {FetchApi}  from "./FetchApi.js";
import {BeerList} from "./BeerList.js"
import  {BeerDetails} from "./DetailScreen.js";


function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <div>
        <FetchApi/>
        <BeerList/>
        
      </div>
    </div>
  );
}

export default App;


