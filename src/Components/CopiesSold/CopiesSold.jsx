import Chart from "react-google-charts";
import React, { useState } from 'react';



const CopiesSold = ({videoGames}) => {

    function generateSales(){

        let platforms = videoGames.map(game => {
            return game.platform
        })

        let distinctPlatforms = [...new Set(platforms)]
        console.log('Platforms: ', distinctPlatforms)


        const data = [
            ['Platform', 'Copies Sold'],
            ['Xbox', 5],
            ['PS3', 10],
            ['DS', 15],
            ['Wii', 20],
        ]

        return data
    }

    return(
        <div>
            <Chart chartType= "PieChart" data= {generateSales()} width="100%" height="400px" legendToggle/>
        </div>
    )
}

export default CopiesSold