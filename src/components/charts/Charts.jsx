import React, {useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js"
import { Line } from 'react-chartjs-2';
import './charts.css'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const Charts = () => {
    let delayed;
    const [chartData, setChartData] = useState({
        datasets:[],
    })
    const [chartOptions, setChartOptions]=useState({});
    useEffect(()=>{
        setChartData({
            labels: [
                "Oct 22",
                "Oct 23",
                "Oct 24",
                "Oct 25",
                "Oct 26",
                "Oct 27",
                "Oct 28",
                "Oct 29",
              ],
              datasets: [
                {
                  label: "Shipments",
                  data: [
                    10000, 18000, 12000, 59000, 54000, 20000, 30000, 59000,
                    
                  ],
                  fill: true,
                  borderColor: "#2CD9C5",
                  backgroundColor: "rgba(44, 217, 197)",
                  tension: 0.05,
                },
                {
                  label: "Vehicles",
                  data: [
                    2000, 8000, 5000, 20000, 8000, 11000, 6000, 50000,
                  ],
                  fill: true,
                  borderColor: "#6672FB",
                  backgroundColor: "#6672FB",
                  tension: 0.05,
                },
              ],
        })
        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legends: {
                position: "top",
              },
              title: {
                display: false,
                text: "Shipments",
              },
              filler: {
                propagate: false,
              },
            },
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (
                  context.type === "data" &&
                  context.mode === "default" &&
                  !delayed
                ) {
                  delay = context.dataIndex * 700 + context.datasetIndex * 500;
                }
                return delay;
              },
            },
            interaction: {
              intersect: false,
            },
          })
        
    }, [])
    return (
        <div className="chart-container">
            <div className="chart-text-header">
                <div className="header-1">
                    <p>SHIPMENTS</p>
                    <h1>60,000</h1>

                </div>
                <div className="header-2">
                    <p>ACTIVE VEHICLES</p>
                    <h1>237,889</h1>

                </div>


            </div>
           <Line data={chartData} options={chartOptions}/> 
        </div>
    )
}

export default Charts
