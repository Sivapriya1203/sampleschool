import styled from '@emotion/styled';
import { Button } from '@mui/base'
import React from 'react'
import { Link } from 'react-router-dom'

function Allfeesalloc() {

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  });
  
  const GradientButton = styled(Button)({
    background: 'linear-gradient(45deg, #13c3c2 30%, #1677ff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '15px',
    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    },
  });

  return (
    <div>
     {/* <Link to={'/feesallocationmanu'}> <Button>class</Button></Link>
     <Link to={'/feesstudent'}> <Button>students</Button></Link> */}

<StyledLink to="/feesallocationmanu">
        <GradientButton>Class</GradientButton>
      </StyledLink>
      <StyledLink to="/feesstudent">
        <GradientButton>Students</GradientButton>
      </StyledLink>

    </div>
  )
}

export default Allfeesalloc
