import React, { useState, useEffect } from 'react';
import axios from "axios";




function App() {

  const [entries, setGames] = useState([])

  useEffect(()=> {
    getGames();
  })

  async function getGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    console.log(response.data.data.entries)
    setGames(response.data.entries);
  }
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
}

export default App;
