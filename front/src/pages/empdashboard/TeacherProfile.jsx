import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
    width: '100%',
    height: '100%',
});

const StyledAvatar = styled(Avatar)({
    width: '150px',
    height: '150px',
    margin: '0 auto 10px',
    border: '2px solid #d7d1de',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        boxShadow: '0px 4px 10px rgba(63, 81, 181, 0.5)',
        transform: 'scale(1.1)',
    },
});

const detailStyle = {
    textAlign: 'left',
    marginTop: '10px',
    lineHeight: '1.6',
};

function TeacherProfile({ data }) {
    useEffect(() => {
        console.log('TeacherProfile data:', data);
    }, [data]);

    if (!data) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Grid item xs={12} md={7} lg={8}>
            <StyledPaper>
                <h5>Profile</h5>
                <StyledAvatar src={data.staff_img} alt={data.staff_name} />
                <Typography variant="h6">{data.staff_name}</Typography>
                <div style={detailStyle}>
                    <Typography variant="body2"><strong>Qualification:</strong> {data.qualification}</Typography>
                    <Typography variant="body2"><strong>Experience:</strong> {data.experience}</Typography>
                    <Typography variant="body2"><strong>Email:</strong> {data.email}</Typography>
                    <Typography variant="body2"><strong>Gender:</strong> {data.gender}</Typography>
                    <Typography variant="body2"><strong>Address:</strong> {data.address}</Typography>
                    <Typography variant="body2"><strong>Mobile:</strong> {data.mobile}</Typography>
                    
                </div>
            </StyledPaper>
        </Grid>
    );
}

export default TeacherProfile;
