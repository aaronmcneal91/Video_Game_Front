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
            
            let gamesPerPlatform = props.filterVideoGames.filter(game => game.platform == platform)
            //console.log(`${platform}: `, gamesPerPlatform)

            let gameSalesPerPlatform = gamesPerPlatform.map(game => game.globalSales)
            console.log(`${platform}: `, gameSalesPerPlatform)

            // let distinctVideoGames = [...new Set(gameSalesPerPlatform)]
            //console.log('VG', distinctVideoGames)
            
            return [platform, gamesPerPlatform]
        })

        const data = [
            ['Platform', 'Copies Sold'],
             ...platformArrays
        ]
        //console.log(data)

        return data
    }

    return(
        <div>
            <Chart chartType= "PieChart" data= {generateSales()} width="100%" height="400px" legendToggle/>
        </div>
    )
}

export default CopiesSold