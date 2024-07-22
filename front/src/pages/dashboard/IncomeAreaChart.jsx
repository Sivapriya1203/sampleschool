import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './Chart.css';
import config from '../../config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentStrengthChart = () => {
  const [chartData, setChartData] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
        const data = response.data;
     console.log(data)
        // Process the data into the format expected by Chart.js
        const chartData = {
          labels: data.map(item => item.year),
          datasets: [
            {
              label: 'Student Strength',
              data: data.map(item => item.student_count),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Yearly Student Strength',
      },
    },
  };

  return (
    <div style={{ margin: "auto" }}>
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default StudentStrengthChart;


// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';
// import '../Chart.css';
// import config from '../../config';
// import backgroundImage from '../../assets/images/background.png'; // Ensure the path to your image is correct

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const StudentStrengthChart = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
//         const data = response.data;
//         console.log(data);

//         const chartData = {
//           labels: data.map(item => item.year),
//           datasets: [
//             {
//               label: 'Student Strength',
//               data: data.map(item => item.student_count),
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         setChartData(chartData);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Yearly Student Strength',
//       },
//     },
//   };

//   return (
//     <div className="chart-container">
//       <div className="chart-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
//       {chartData && <Bar data={chartData} options={options} />}
//     </div>
//   );
// };

// export default StudentStrengthChart;

