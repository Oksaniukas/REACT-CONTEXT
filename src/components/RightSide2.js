import React from "react";
import RightSide3 from "./RightSide3";
import { useContext } from "react";
import NewContext from "./NewContext";

function RightSide2() {
   let right = useContext(NewContext);
   let side = right.data;
   let setSide = right.setData;

   console.log(`Hello from ${side.rightSide}`);

   function changeSideColor () {
      setSide({
         leftSide: "NOW BLUE",
         rightSide: "blue"
       })
   }

   return(
      <div>
         <button onClick={changeSideColor}>Change</button>
         <div className="blue-block">
            <div className="blue-block-number">2</div>
         </div>
         <RightSide3 />
      </div>
   )
}

export default RightSide2;