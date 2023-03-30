// import logo from './logo.svg';
import './App.css';
import Info from "./info.js"

function App() {
  return (
    <div className="App">
        <Info/>
        <AddItem/>
        <AddItem/>
        <AddItem/>
    </div>
  );
}



function AddItem(){
  const value = "Harrison is great"
  return(
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" value={value} id="text-form"></input>
    </form>
  );
}

export default App;
