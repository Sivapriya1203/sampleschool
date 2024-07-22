import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Classstudents() {
    const staff_id = sessionStorage.getItem('staff_id');
    const [studentData, setStudentData] = useState([]);
    const [attendanceState, setAttendanceState] = useState({
        attendanceData: {},
        attendanceDate: new Date().toISOString().slice(0, 10),
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${config.apiURL}/attenance/classstudents/${staff_id}`)
            .then((res) => {
                setStudentData(res.data);
            })
            .catch((err) => {
                console.error('Error fetching student data:', err);
            });
    }, [staff_id, config.apiURL]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { attendanceData, attendanceDate } = attendanceState;

        try {
            for (const studentId in attendanceData) {
                const status = attendanceData[studentId];
                const student = studentData.find((s) => s.stu_id === parseInt(studentId));

                const formData = {
                    staff_id: staff_id,
                    stu_id: student.stu_id,
                    cls_id: student.cls_id,
                    date: attendanceDate,
                    status: status,
                };

                console.log("Form Data:", formData);

                await axios.post(`${config.apiURL}/students/studentsattenance`, formData);

                console.log(`Updated attendance for student ${studentId}:`, formData);
            }

            console.log("Attendance data submitted successfully!");
            alert("Attendance data submitted successfully!");
            navigate(`/attenancedetails/${staff_id}`);
        } catch (err) {
            console.error('Error saving attendance:', err);
            // Handle error scenario
        }
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const tableContainerStyle = {
        maxWidth: '600px', // Adjust as needed
        margin: 'auto',
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="date"
                    label="Attendance Date"
                    value={attendanceState.attendanceDate}
                    onChange={(e) => setAttendanceState({ ...attendanceState, attendanceDate: e.target.value })}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="mb-3"
                />
                <TableContainer component={Paper} style={tableContainerStyle} className="mt-3">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">S.No</StyledTableCell>
                                <StyledTableCell align="center">Student Name</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentData.map((data, index) => (
                                <StyledTableRow key={data.stu_id}>
                                    <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                    <StyledTableCell align="center">{data.stu_name}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <Button variant="contained" color="success" type="submit" className="mt-4">
                    Submit
                </Button> */}
            </form>
        </div>
    );
}

export default Classstudents;

