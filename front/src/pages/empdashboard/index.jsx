import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TeacherProfile from './TeacherProfile';

export default function DashboardDefault() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState({});
  const [chartData, setChartData] = useState([]);
  const staff_id = sessionStorage.getItem('staff_id')

  useEffect(() => {
    // Fetching data for Student Attendance
   
    // Fetching data for Classwise First Mark
    axios.get(`${config.apiURL}/staffs/getStaffdash/${staff_id}`)
      .then((res) => {
        
       setStaffsCount(res.data);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
      });

    // Fetching data for Bar Chart
    axios.get(`${config.apiURL}/dashboard/chartData`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
      });
  }, []);

  return (
    <Grid container spacing={1} sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 2 }}>


      {/* Profile section */}
      <Grid item xs={12} md={6} container justifyContent="center">
        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TeacherProfile  data={staffsCount[0]}sx={{ width: '100%', height: '100%' }} />
        </Box>
      </Grid>

    
    </Grid>
  );
}