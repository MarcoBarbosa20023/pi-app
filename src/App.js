import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://5e9iqbmwn1.execute-api.eu-north-1.amazonaws.com/items')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  []);



  return (
    <div className="App">
      <header className="App-header">        
        <h1>
          Data:
        </h1>
        <ul>
          {data.map((item,index) => (
            <li key={index}>
              <p>Tree: {item.treecount}</p>
              <p>Diameter: {item.diameter}</p>
              <p>Timestamp: {item.timestamp}</p>
              <p>Status: {item.status}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
