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
            //debugger
            
            let gameSalesPerPlatform = 
            if(props.filteredVideoGames){
                let gameSales = props.filteredVideoGames.filter(game => game.globalSales)
                console.log(gameSales)
            }
            
            return [platform, gameSales]
        })

        const data = [
            ['Platform', 'Copies Sold'],
            ...platformArrays
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