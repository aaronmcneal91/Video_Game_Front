import React, { useState, useEffect } from 'react';
import axios from "axios";
import SalesChart from './Components/VideoGameChart/VideoGameChart';
import VideoGameDetails from './VideoGameDetails';
import SearchBar from './Components/SearchBar/SearchBar';
import CopiesSold from './Components/CopiesSold/CopiesSold'

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
      <div>
        <h3>Platform Sales In Millions Since 2013</h3>
        <SalesChart  videoGames = {videoGames}/>
        {/* <CopiesSold filterVideoGames= {filteredVideoGames} videoGames={videoGames} /> */}
        <SearchBar filterVideoGames={filterVideoGames}/>
        <VideoGameDetails filteredVideoGames={filteredVideoGames}/>
      </div>

    </div>
  );
}

export default App;
