"use client"
import {
  Chart,
  LinearScale,
  CategoryScale, 
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend, 
  Colors
} from "chart.js";
import { Bar } from 'react-chartjs-2'

function Protocol() {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels : ["HTTP", "HTTPS", "FTP"],
    datasets: [{
      label: "Protocol Type", 
      data  : [12, 19, 2]
    }]
  }
  const options = {
    responsive: true,
  }
  return (
    <Bar 
      options={options}
      data={data}
      /> 
  )
}

export default Protocol