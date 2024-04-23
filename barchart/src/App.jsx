import { Bar } from "react-chartjs-2";
//import { Chart,LinearScale,CategoryScale,BarElement,Legend, Title,Tooltip, plugins } from "chart.js";
//Chart.register(LinearScale,CategoryScale,BarElement,Legend, Title,Tooltip)
import { Chart } from "chart.js/auto";
const App = () => {
  const labels = ["jan", "feb", "mar", "apr","may" ,"jun","jul","aug","sep","oct","nov", "dec"];
  const options = {
    plugins: {
      legend:{
        position: "top"
      },
      title:{
        display : true,
       text: "Tracker"
      }
    }
  }
  
  
  
  const data = {
    labels,
    datasets: [
      {
        label: "2020 expenses",
        data: [10000, 9000, 8000, 10200, 10500, 8400, 13000, 8900, 14600, 17000, 9000, 12500],
        backgroundColor: "pink"
      },
      {
        label: "2021 expenses",
        data: [17000, 11000, 12500, 11000, 12100, 7500, 13800, 8100, 9600, 10000, 11000, 8000],
        backgroundColor: "black"
      }
    ]
  };

  return (
    <div>
      <Bar data= {data} options={options}/>
    </div>
  );
};

export default App;
