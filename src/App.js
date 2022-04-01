import React, { useState, useEffect } from 'react';
import axios from "axios";
import SalesChart from './Components/VideoGameChart/VideoGameChart';
import EntryData from './VideoGameDetails';

function App() {

  const [videoGames, setVideoGames] = useState([])

  useEffect(()=> {
    getVideoGames();
  }, [])

  async function getVideoGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    console.log(response.data)
    setVideoGames(response.data);

  }
  
  return (
    <div>
      <h3>Platform Sales In Millions</h3>
      <div>
        <SalesChart  videoGames = {videoGames}/>
      </div>
      <td></td>

    </div>
  );
}



export default App;
