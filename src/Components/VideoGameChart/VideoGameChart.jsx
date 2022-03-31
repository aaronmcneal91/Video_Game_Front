import Chart from 'react-google-charts';
import React, { useState, useEffect } from 'react';



const SalesChart = ({parentEntries}) => {
    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        
        <Chart  
chartType= "ScatterChart"
data = {[["Platform", "Global Sales", ],["Xbox", 100, ] ]}
width = "100%"
height={"400px"}
legendToggle/>
        
    )
}
/* <Chart  
chartType= "ScatterChart"
data = {[["Platform", "Global Sales", ],["Xbox", 100, ] ]}
width = "100%"
height={"400px"}
legendToggle/> */


export default SalesChart;

