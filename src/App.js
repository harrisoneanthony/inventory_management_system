// import logo from './logo.svg';
import './App.css';
import Info from "./info.js"


function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}


function AddItem(){
  const value = "enter stuff"
  return (
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" value={value} id="text-form"/>
    </form>
  )
}

export default App;
