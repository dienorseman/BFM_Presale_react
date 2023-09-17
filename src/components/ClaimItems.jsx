import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import PulseLoader from "react-spinners/PulseLoader";

function convertTimeStampToDate(timestamp, month) {
  //Converts the given Timestamp start date to each month
  //I.E 1st Month, 2nd Month etc
  var months = 2629743 * month; 
  var date = new Date((parseInt(timestamp) +months) * 1000); //Convert seconds to milliseconds
  return date.toLocaleDateString();
}

function ClaimPhase({
  title,
  claimed,
  claimable,
  duration,
  startTime,
  lockPeriod,
}) {
  // Create an array of month labels
  const months = [
    "1st month",
    "2nd month",
    "3rd month",
    "4th month",
    "5th month",
  ];

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={3}
        sx={{
          textWrap: "nowrap",
          p: 2,
          borderRadius: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: 'Inter, sans-serif' }}>
          {title}
        </Typography>
        
        <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
          Total Claimable: {claimable}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
          Claimed: {claimed}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
          Token Lock Period {lockPeriod} Months
        </Typography>
        {months.map((month, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            sx={{ fontFamily: 'Inter, sans-serif' }}
          >
            Release on {convertTimeStampToDate(startTime,index+1)}: {Math.floor(claimable * (index === 0 ? 50 : 10) / 100)}
          </Typography>
        ))}
        <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif' }}>
          Release Duration: {duration} Days
        </Typography>
      </Paper>
    </Grid>
  );
}

function ClaimItems({ BalanceInfo, presaleInfo }) {
  const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0 && objectName.constructor === Object;
  };
  return (
    <>
      <div>
        {isObjectEmpty(BalanceInfo) || presaleInfo === undefined ? (
          <>
            <PulseLoader
              loading={isObjectEmpty(BalanceInfo)}
              size={15}
              color="white"
              aria-label="Loading Spinner"
            />
          </>
        ) : (
          ""
        )}
      </div>
      <Grid container spacing={2}>
        {!isObjectEmpty(BalanceInfo) || !presaleInfo === undefined
          ? BalanceInfo.map((phase, index) => (
              <ClaimPhase
                key={index}
                title={"Phase " + (index + 1)}
                claimed={Math.floor(parseInt(phase[1]) / 10 ** 8)}
                claimable={Math.floor(parseInt(phase[0]) / 10 ** 8)}
                duration={30}
                startTime={presaleInfo[index]}
                lockPeriod={(BalanceInfo.length - index) * 3}
              />
            ))
          : ""}
      </Grid>
    </>
  );
}

export default ClaimItems;