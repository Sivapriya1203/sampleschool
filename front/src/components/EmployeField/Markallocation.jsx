import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const Markallocation = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [examNames, setExamNames] = useState([]);

  const staff_id = sessionStorage.getItem('staff_id');

  // Fetch students and exams on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${config.apiURL}/attenance/classstudents/${staff_id}`);
        const studentsWithMarks = response.data.map(student => ({
          stu_id: student.stu_id,
          stu_name: student.stu_name,
          tamil: '',
          english: '',
          maths: '',
          science: '',
          social: '',
          total: 0,
        }));
        setStudents(studentsWithMarks);
        setFilteredStudents(studentsWithMarks);
      } catch (error) {
        console.log('Error fetching students:', error);
      }
    };

    const fetchExams = async () => {
      try {
        const response = await axios.get(`${config.apiURL}/students/getexamsalloc`);
        setExamNames(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchStudents();
    fetchExams();
  }, [staff_id]);

  // Handle input changes for each student row
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedStudents = [...filteredStudents];
    updatedStudents[index][name] = value;
    updatedStudents[index].total =
      (parseInt(updatedStudents[index].tamil, 10) || 0) +
      (parseInt(updatedStudents[index].english, 10) || 0) +
      (parseInt(updatedStudents[index].maths, 10) || 0) +
      (parseInt(updatedStudents[index].science, 10) || 0) +
      (parseInt(updatedStudents[index].social, 10) || 0);
    setFilteredStudents(updatedStudents);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the selected exam object using exam name
    const selectedExamObject = examNames.find(exam => exam.exam_name === selectedExam);

    // Prepare data to be sent to the backend
    const dataToSave = filteredStudents.map(student => ({
      stu_id: student.stu_id,
      stu_name: student.stu_name,
      tamil: student.tamil,
      english: student.english,
      maths: student.maths,
      science: student.science,
      social: student.social,
      total: student.total,
      examname: selectedExam, // Include selected exam name
      exam_id: selectedExamObject.exam_id // Include selected exam id
    }));
console.log(dataToSave)
    try {
      await axios.post(`${config.apiURL}/students/saveStudentMarks`, dataToSave);
      alert('Marks saved successfully!');
    } catch (error) {
      console.error('There was an error saving the marks!', error);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterStudents(query, selectedClass);
  };

  // Handle class filter change
  const handleClassFilter = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
    filterStudents(searchQuery, selectedClass);
  };

  // Handle exam selection change
  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  // Filter students based on search query and class filter
  const filterStudents = (query, classFilter) => {
    const filtered = students.filter(student =>
      (student.stu_name.toLowerCase().includes(query) || student.stu_id.toString().includes(query)) &&
      (classFilter === '' || student.class === classFilter)
    );
    setFilteredStudents(filtered);
  };

  // Table styles
  const tableStyle = {
    border: '2px solid #333',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
  };

  // Cell styles
  const cellStyle = {
    textAlign: 'center',
    verticalAlign: 'middle',
  };

  // Table header styles
  const theadStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
  };

  return (
    <div className="container mt-5">
      <div className="d-flex mb-3">
        {/* Dropdown for selecting exam */}
        <select
          value={selectedExam}
          onChange={handleExamChange}
          className="form-control mr-2"
        >
          <option value="">Select an exam</option>
          {examNames.map(exam => (
            <option key={exam.exam_id} value={exam.exam_name}>{exam.exam_name}</option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {/* Table to display student marks */}
          <table className="table table-striped table-bordered table-hover" style={tableStyle}>
            <thead className="thead-dark" style={theadStyle}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Mathematics</th>
                <th>Science</th>
                <th>Social Science</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each student row */}
              {filteredStudents.map((student, index) => (
                <tr key={student.stu_id} style={cellStyle}>
                  <td>{student.stu_id}</td>
                  <td>{student.stu_name}</td>
                  <td><input type="number" name="tamil" value={student.tamil} onChange={(e) => handleInputChange(e, index)} /></td>
                  <td><input type="number" name="english" value={student.english} onChange={(e) => handleInputChange(e, index)} /></td>
                  <td><input type="number" name="maths" value={student.maths} onChange={(e) => handleInputChange(e, index)} /></td>
                  <td><input type="number" name="science" value={student.science} onChange={(e) => handleInputChange(e, index)} /></td>
                  <td><input type="number" name="social" value={student.social} onChange={(e) => handleInputChange(e, index)} /></td>
                  <td><input type="number" name="total" value={student.total} readOnly /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Button to save marks */}
        <button type="submit" className="btn btn-primary mt-3">Save</button>
      </form>
    </div>
  );
};

export default Markallocation;
