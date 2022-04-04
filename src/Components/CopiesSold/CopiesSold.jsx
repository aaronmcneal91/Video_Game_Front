import Chart from "react-google-charts";
import React, { useState } from 'react';



const CopiesSold = ({videoGames}) => {

    function generateSales(){

        let platforms = filteredGames.filter(game = game.globalsales);
        


        
    }
    return(
        <div>
            <Chart chartType= "PieChart" data= {generateSales()} width="100%" height="400px"legendToggle/>
        </div>
    )
}


