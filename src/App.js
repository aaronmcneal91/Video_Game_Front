import React, { useState, useEffect } from 'react';
import axios from "axios";
import SalesChart from './Components/VideoGameChart/VideoGameChart';
import EntryData from './VideoGameDetails';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [videoGames, setVideoGames] = useState([])
  const [filteredVideoGames, setFilteredVideoGames] = useState([])

  useEffect(()=> {
    getVideoGames();
  }, [])

  async function getVideoGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    //console.log(response.data)
    setVideoGames(response.data);

  }

  const filterVideoGames = (searchVideoGame) => {
    console.log(searchVideoGame)
    let matchingVideoGames = videoGames.filter((game) => {
      if(game.name.toLowerCase().includes(searchVideoGame.toLowerCase())){
        return true
      }
      else return false
    })
    console.log(matchingVideoGames)

    setFilteredVideoGames(matchingVideoGames)
  }
  
  return (
    <div>
      <h3>Platform Sales In Millions</h3>
      <div>
        <SalesChart  videoGames = {videoGames}/>
        <SearchBar filterVideoGames={filterVideoGames}/>
      </div>
      <td></td>

    </div>
  );
}



export default App;
