import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

const Itemsapi = ({urlcoctels}) => {
    
       console.log("Cocteles");   
       console.log(urlcoctels); 
       // const urlcoctel=urlcoctels;
  
  return (

         <div className="listresidents2"> 
      
             <li>Name: {urlcoctels?.strDrink}</li>  
             <li>
             <img className="imgcoctel" src={urlcoctels?.strDrinkThumb} alt="img_personage"></img> 
             </li>
             <h2>Ingredients</h2>
             <li>{urlcoctels?.strIngredient1!==null ?"Ingredient 1:"+" "+urlcoctels?.strIngredient1:""}</li>
             <li>{urlcoctels?.strIngredient2!==null ?"Ingredient 2:"+" "+urlcoctels?.strIngredient2:""}</li>
             <li>{urlcoctels?.strIngredient3!==null ?"Ingredient 3:"+" "+urlcoctels?.strIngredient3:""}</li>
             <li>{urlcoctels?.strIngredient4!==null ?"Ingredient 4:"+" "+urlcoctels?.strIngredient4:""}</li>
             <li>{urlcoctels?.strIngredient5!==null ?"Ingredient 5:"+" "+urlcoctels?.strIngredient5:""}</li>
             <h2>Preparation</h2>
             <p>{urlcoctels?.strInstructions}</p>

           
         </div>
        
  );
};

export default Itemsapi;
