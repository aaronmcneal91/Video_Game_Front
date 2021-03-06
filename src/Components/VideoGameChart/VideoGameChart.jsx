import Chart from 'react-google-charts';
import React, { useState, useEffect } from 'react';


const SalesChart =  ({videoGames}) => {

    function generateData(){

        //console.log('Video Games', videoGames)

        let filteredGames = videoGames.filter(game => game.year >= 2013);
        //console.log('Filtered Games', filteredGames)

        let platforms = filteredGames.map(game => {
            return game.platform
        });
        //console.log("Platform", platforms)

        let distinctPlatforms = [...new Set(platforms)]
        //console.log("Distinct Platforms", distinctPlatforms)

        let platformArrays = distinctPlatforms.map(platform =>{

            let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
            //console.log(`${platform} Games:`, allGamesForPlatform)
    
            let platformGlobalSales = allGamesForPlatform.map(game => game.globalSales)
            //console.log(`${platform} Global Sales:`, platformGlobalSales)

            let sumOfPlatformGlobalSales = platformGlobalSales.reduce((a, b) => a + b, 0);
            //console.log(`${platform} Global Sales Total:`,sumOfPlatformGlobalSales)

            return [platform, sumOfPlatformGlobalSales, "blue"]
        
        });
        //console.log("platform Arrays", platformArrays)
    
        const data =[
            ["Platform", "Sales", {role: "style"}],
            ...platformArrays   
        ];
        
    return data
}

    return(
        <div>
           <Chart chartType= "ScatterChart" data = { generateData()} width = "100%" height = "400px" legendToggle/> 
        </div>
            
    );
}

export default SalesChart;

