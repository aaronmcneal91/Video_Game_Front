import Chart from "react-google-charts";
import React, { useState } from 'react';



const CopiesSold = (props) => {

    function generateSales(){

        let platforms = props.videoGames.map(game => {
            return game.platform
        })

        let distinctPlatforms = [...new Set(platforms)]
        console.log('Platforms:', distinctPlatforms)

        let platformArrays = distinctPlatforms.map(platform => {
            
            
            let gameSalesPerPlatform = props.filterVideoGames.filter(game => game.globalSales > 2)
            
                console.log(gameSalesPerPlatform)
            
            
            return [platform, gameSalesPerPlatform]
        })

        const data = [
            ['Platform', 'Copies Sold'],
             ...platformArrays
        ]
        console.log(data)

        return data
    }

    return(
        <div>
            <Chart chartType= "PieChart" data= {generateSales()} width="100%" height="400px" legendToggle/>
        </div>
    )
}

export default CopiesSold