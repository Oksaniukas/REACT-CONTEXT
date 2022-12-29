import  LeftSide1  from "./components/LeftSide1";
import RightSide1  from "./components/RightSide1";
import NewContext from "./components/NewContext";
import { useState } from "react";

function App() {
  const [side, setSide] = useState({
    leftSide: "yellow",
    rightSide: "blue"
  })
 
  return (
    <div className="App">
      <NewContext.Provider value={{data: side, setData: setSide}}>
        <LeftSide1 />
      </NewContext.Provider>

      <NewContext.Provider value={{data: side, setData: setSide}}>
        <RightSide1 />
      </NewContext.Provider>
    </div>
  );
}

export default App;
