import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import config from '../../config';

function Allotfees({ data, onClose }) {
    const [totalfees, setTotalfees] = useState(0); // Initialize totalfees state with 0
    const [studentinfo, setStudentinfo] = useState({
        stu_name: data ? data.stu_name : "",
        tution_fees: data ? data.tution_fees : "",
        transport_fees: data ? data.transport_fees : "",
        additional_fees: data ? data.additional_fees : "", 
        discount: ""
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update studentinfo state
        setStudentinfo({ ...studentinfo, [name]: value });
        
        // Calculate total fees
        const total = calculateTotal({ ...studentinfo, [name]: value });
        setTotalfees(total);
    };

    const calculateTotal = ({ tution_fees, transport_fees, additional_fees, discount }) => {
        const tution = parseInt(tution_fees) || 0; // Default to 0 if empty or NaN
        const transport = parseInt(transport_fees) || 0;
        const additional = parseInt(additional_fees) || 0;
        const discoun = parseInt(discount) || 0;
        return (tution + transport + additional) - discoun;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { stu_name, tution_fees, transport_fees, additional_fees, discount } = studentinfo;
        const total = calculateTotal(studentinfo);

        const formData = {
            stu_name,
            tution_fees,
            transport_fees,
            additional_fees,
            discount,
            total_fees: total // Include totalfees in the form data to be sent to the backend
        };

        console.log(formData)
        axios.put(`${config.apiURL}/feeAllocation/allfeesalloc/${data.stu_id}`, formData)
            .then((res) => {
                console.log(res);
                onClose();
            })
            .catch((err) => {
                console.log("Error updating fees.", err);
            });
    };

    return (
        <div>
            <h1>Admission form</h1>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="stu_name"
                            label="Student Name"
                            value={studentinfo.stu_name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="tution_fees"
                            label="Tuition Fees /scheme Amount"
                            
                            value={studentinfo.tution_fees}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="transport_fees"
                            label="Transport Fees"
                            value={studentinfo.transport_fees}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Additional Fees"
                            name="additional_fees"
                            value={studentinfo.additional_fees}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Discount"
                            name="discount"
                            value={studentinfo.discount}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Total Fees"
                            value={totalfees}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button type="submit">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default Allotfees;
