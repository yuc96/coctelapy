import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Itemsapi from "./components/itemsapi";
import "./index.css";
import  boxerror from "./images/empty_box-Large.jpg";
import  logoerror from "./images/bx-question-mark.svg";
function App() {

  const [drink, setDrink] = useState([]);
  const [typeId, setTypeId] = useState("");

   useEffect(() => {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
            .then((res) => setDrink(res.data));
   }, []);

   const searchType = () => {
  
        try {
          axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${typeId}`)
          .then((res) =>{ 
            setDrink(res.data); 
          }
          )
        } catch(error) {
            alert(error)
        }
      
   };

   console.log("cocteles/*/*/***");  
   console.log(drink.drinks);


  return (
    <div className="App">
         <div className="dimensonname">
        <h1>Coctels</h1> 
       </div>
       <div className="searchdiv">
          <input className="searchinput"
            type="text"
            value={typeId}
            placeholder="Write a Name Coctel"
            onChange={(e) => setTypeId(e.target.value)}
          />
          <button onClick={searchType}>Search</button>  
      </div>
       <ul  className="listresidents" key={drink.drinks?.idDrink}>
          {
                      drink.drinks !== null ?
                      drink.drinks?.map((urlcoctel) => (
                      < Itemsapi  urlcoctels={urlcoctel} />
                        ))
                        :
                          <> 
                            <div className="contenedorerror">
                              <h2>No existen Coincidencias</h2>
                              <img className="logoerror" src={logoerror} alt="img_error"></img>  
                              <img className="boxerror" src={boxerror} alt="img_error"></img>  
                            </div>
                            </>
                        
          }
       </ul>  
     </div> 
  );
}

export default App;
