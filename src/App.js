// import logo from './logo.svg';
import './App.css';
import {propTypes} from "prop-types"
import Info from "./info.js"


function App() {
  return (
    <div className="App">
      <Info title="Inventory"/>
      <AddItem text="Harrison" number={2}/>
      <AddItem text="test"/>
      <AddItem/>
    </div>
  );
}

function ButtonState(){
  return (
    <div>
      <p>Title: </p>
      <p>Counter: </p>
      <button>Update Title</button>
      <button>Update Counter</button>
    </div>
  );
}

// props are read only values unless decomposed
function AddItem(props){
  const value = props.text;
  return (
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" value={value} id="text-form"/>
      <p>{props.number}</p>
    </form>
  )
}

AddItem.defaultProps = {
  number: 1,
  text: "default",
}

AddItem.propTypes = {
  number: propTypes.number,
  text: propTypes.string,
}

export default App;
