import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function ClaimPhase({ title, claimed, claimable, duration, lockPeriod }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
  <Paper elevation={3} sx={{ textWrap:'nowrap',p: 2, borderRadius: "10px", backgroundColor: 'black', color: 'white' }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: 'Inter, sans-serif' }}>
      {title}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      Total Claimable: {claimable}  
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>Claimed: {claimed} </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      Token Lock Period {lockPeriod} Months
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      1st month: {Math.floor(claimable*50/100)}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      2nd month: {Math.floor(claimable*10/100)}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      3rd month: {Math.floor(claimable*10/100)}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      4th month: {Math.floor(claimable*10/100)}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      5th month: {Math.floor(claimable*10/100)}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
      Release Duration: {duration} Days
    </Typography>
    
  </Paper>
</Grid>

  );
}

function ClaimItems({BalanceInfo}) {
  const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0 && objectName.constructor === Object;
  }
  console.log("Balance info = ",BalanceInfo)
  return (
    <Grid container spacing={2}>
      
      {!(isObjectEmpty(BalanceInfo) )? BalanceInfo.map((phase, index) => (
        <ClaimPhase
          key={index}
          title={"Phase " + (index+1) }
          claimed={parseInt(phase[1])}
          claimable={parseInt(phase[0])}
          duration={30}
          lockPeriod={(BalanceInfo.length - index) * 3}
          
        />
      )): <div>Loading</div>
      
      }
    </Grid>
  );
}

export default ClaimItems;
