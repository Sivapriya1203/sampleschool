import React, { useState, useEffect } from 'react';
import { Button, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config';

function Exams() {
  const [examNames, setExamNames] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    // Fetch exam names on component mount
    axios.get(`${config.apiURL}/students/getexamsalloc`)
      .then((res) => {
        setExamNames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleExamSelect = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find the selected exam object using exam name
    const selectedExamObject = examNames.find(exam => exam.exam_name === selectedExam);
console.log(selectedExamObject)
    if (selectedExamObject) {
      // Fetch data from backend based on selected exam_id
      axios.get(`${config.apiURL}/students/examdata/${selectedExamObject.exam_id}`)
        .then((res) => {
          setExamData(res.data);
          console.log('Exam data:', res.data);
        })
        .catch((err) => {
          console.error('Error fetching exam data:', err);
        });
    } else {
      console.error('Selected exam not found in examNames array.');
    }
  };

  return (
    <div>
      <h1>Exams</h1>
      <Link to="/markallocstud">
        <Button>Add Marks</Button>
      </Link>

      <form onSubmit={handleSubmit}>
        <Select
          value={selectedExam}
          onChange={handleExamSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Select exam' }}
        >
          <MenuItem value="" disabled>
            Select Exam
          </MenuItem>
          {examNames.map((examName) => (
            <MenuItem key={examName.exam_id} value={examName.exam_name}>
              {examName.exam_name}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary">
          Get Exam Data
        </Button>
      </form>

      {examData && (
        <div>
          <h2>{selectedExam} Data</h2>
          <pre>{JSON.stringify(examData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Exams;
