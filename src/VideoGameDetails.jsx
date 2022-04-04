import React from "react";

const VideoGameDetails = (props) => {
    return ( 
        <table className="data">
        <thead>
          <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
          <th>North America Sales</th>
          <th>Europe Sales</th>
          <th>Japan Sales</th>
          <th>Other Sales</th>
          <th>Global Sales</th>
          </tr>
        </thead>
          
        <tbody>
          {props.filteredVideoGames.map((game, index) => { 
          return (
            <tr key={index}>
                <td>{index + 1 }</td>
                <td>{game.rank}</td>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.publisher}</td>
                <td>{game.northAmericaSales}</td>
                <td>{game.europeSales}</td>
                <td>{game.japanSales}</td>
                <td>{game.otherSales}</td>
                <td>{game.globalSales}</td>
            </tr>
            );
          })}
          <tr>
          </tr>
        </tbody>
          
      </table>
     );
}

export default VideoGameDetails;