import './App.css';
import SearchBar from "./SearchBar";
import AddItem from './AddItem';
import {useState, useEffect} from "react"
import ItemsDisplay from './ItemsDisplay';
// import Test from './Class';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: []});
  // const [showTest, setShowTest] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) => setData({items: data }));

  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(item);
        setData({ items: items});
      });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name){
      return data;
    }
    for (const item of data){
      if (filters.name !== "" && item.name !== filters.name){
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price){
        continue;
      }
        if (filters.type !== "" && item.type !== filters.type){
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand){
        continue;
      }
      filteredData.push(item);
    }
    return filteredData
  }


  return (
    <div className="container">
      <div className='row'>
        <SearchBar updateSearchParams={updateFilters}/>
      </div>
      <div className='row'>
        <ItemsDisplay items={filterData(data["items"])}/>
      </div>
      <div className='row'>
        <AddItem addItem={addItemToData}/>
      </div>
      {/* {showTest ? <Test destroy={setShowTest} /> : null} */}
    </div>
  );
}

export default App;
