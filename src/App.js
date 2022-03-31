import React, { useState, useEffect } from 'react';
import axios from "axios";
import SalesChart from './Components/VideoGameChart/VideoGameChart';





function App() {

  const [entries, setGames] = useState([])

  useEffect(()=> {
    getGames();
  }, [])

  async function getGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    console.log(response.data)
    setGames(response.data);
  }
  return (
    <div>
      <h3>Hello, have some games</h3>
      <div>
        <SalesChart parentEntries = {entries}/>
      </div>
      <td></td>

    </div>
  );
}



export default App;
