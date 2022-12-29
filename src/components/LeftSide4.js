import React from "react";
import { useContext } from "react";
import NewContext from "./NewContext";

function LeftSide4() {
   let left = useContext(NewContext);
   let side = left.data;
   let setSide = left.setData;

   console.log(`Hello from ${side.leftSide}`)

   return(
      
         <div className="yellow-block">
         <div>
            {side.leftSide}
         </div>
            <div className="yellow-block-number">4</div>
         </div>
         
      
   )
}

export default LeftSide4;