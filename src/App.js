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

  // async function getPlatform(){
  //   let response = await axios.get('https://localhost:7260/api/games');
  //   const result = response.data.filter(games =>{
  //     if (games.parentEntries ===query){
  //       return games
  //     }

  //   })
  //   console.log(response.data)
  }
  
  return (
    <div>
      <h3>Hello, have some games</h3>
      <div>
        <SalesChart  videoGames = {videoGames}/>
      </div>
      <td></td>

    </div>
  );
}



export default App;
