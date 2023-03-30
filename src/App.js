// import logo from './logo.svg';
import './App.css';
import Info from "./info.js";
// import { ProfilerProps } from 'react';
// import { propTypes } from "prop-types";
import { useState } from "react";


function App() {
  return (
    <div className="App">
        <Info/>
        <ButtonState/>
        {/* <AddItem text="Harrison" number={2}/>
        <AddItem text="some"/>
        <AddItem/> */}
    </div>
  );
}


// function AddItem(props){
//   return(
//     <form>
//       <label for="text-form">Type something:</label>
//       <input type="text" value={props.text} id="text-form"></input>
//       <p>{props.number}</p>
//     </form>
//   );
// }

// AddItem.defaultProps = {
//   number: 1,
// };

// AddItem.propTypes = {
//   number: propTypes.number,
//   title: propTypes.string
// }

function ButtonState(){
  const [title, setTitle ] = useState("");
  const [count, setCount] = useState(0);
  
  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  }

  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  )
}

function Data(props){
  return(
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}

export default App;
