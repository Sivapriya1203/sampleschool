import axios from 'axios';
import config from '../../config';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { color } from 'framer-motion';

function Staffdetail() {
  const [detail, setDetails] = useState([]);
  const { staff_id } = useParams();

  useEffect(() => {
    axios.get(`${config.apiURL}/staffs/getattenancedetails/${staff_id}`)
      .then((res) => {
        setDetails(res.data); // Use res.data to set the details
      })
      .catch((err) => {
        console.log(err);
      });
  }, [staff_id]);

  // Function to format date as "YYYY-MM-DD"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  return (
    <div>
      <h1>Staff Detail</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: 'black' }}>
            <th style={tableHeaderStyle}>S.No</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Time</th>
            <th style={tableHeaderStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((data, index) => (
            <tr key={index} style={{ border: '1px solid #ddd' }}>
              <td style={tableCellStyle}>{index + 1}</td>
              <td style={tableCellStyle}>{data.statusn}</td>
              <td style={tableCellStyle}>{data.entrytime}</td>
              <td style={tableCellStyle}>{formatDate(data.thatdate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline styles for table header and cell
const tableHeaderStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
  color:'white'
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
  backgroundColor:'white',
};

export default Staffdetail;
