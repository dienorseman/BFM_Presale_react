import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ClaimItems from "./ClaimItems";
import { useAddress } from "@thirdweb-dev/react";
import { ClaimTokens } from "../helpers/web3helper";
const ClaimToken = ({ tokenHolding,contract,isContractLoading,UserBalanceInfo }) => {
  console.log("Toe")
  const address = useAddress();
  const matches = useMediaQuery("(min-width:900px)");
  const stack = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "30px",
    width: "100%",
  };
  
  useEffect(()=>{

  })

  return (
    <Box sx={{ background: "#000000" }}>
      <Container sx={{ py: 12 }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            mt: { xs: 5, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(187deg, rgb(247 161 67) 0%, rgb(121 76 16) 35%, rgb(0 0 0) 100%)",
              borderRadius: "20px",
              boxShadow: 2,
              border: "2px solid #2C2743",
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              p: 3,
              gap: "30px 0px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Box>
              {address ? (
                <>
                  {!matches ? (
                    <>
                      <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
                        {address.slice(0, 4)}.....{address.slice(-4)}{" "}
                      </Typography>
                    </>
                  ) : (
                    <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
                      {address}
                    </Typography>
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "30px",
                },
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
              }}
            >
              PRESALE - <span style={{ color: "rgb(251 231 203)" }}>SOLD OUT </span>
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px 20px",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ClaimItems BalanceInfo={UserBalanceInfo}></ClaimItems>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "2px solid #655d5d",
                  p: { xs: 1, md: 2 },
                  borderRadius: "10px",
                  width: "100%",
                  marginTop: "30px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      md: "20px",
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Your Holdings
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "15px" },
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {parseInt(tokenHolding)/10**18} BFM
                </Typography>
              </Box>
              {/* Three Claim Buttons */}

              <Box
                sx={
                  matches
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "30px",
                        width: "100%",
                      }
                    : stack
                }
              >
                <Button
                  sx={{
                    background:
                      "rgb(247, 155, 32)",
                    borderRadius: "10px",
                    p: 1,
                    maxWidth: "320px",
                    width: "100%",
                    color: "#fff",
                    border: "2px solid #2C2743",
                    fontSize: "18px",
                    fontWeight: "600",
                    "&:hover": {
                      background:
                        "rgb(255, 255, 255)",
                        color:"black",
                      fontSize: "18px",
                      fontWeight: "600",
                    },
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={()=>{ClaimTokens(contract,1)}}
                >
                  Claim Phase 1
                </Button>
                <Button
                  sx={{
                    background:
                      "rgb(247, 155, 32)",
                    borderRadius: "10px",
                    p: 1,
                    maxWidth: "320px",
                    width: "100%",
                    color: "#fff",
                    border: "2px solid #2C2743",
                    fontSize: "18px",
                    fontWeight: "600",
                    "&:hover": {
                      background:
                        "rgb(255, 255, 255)",
                        color:"black",
                      fontSize: "18px",
                      fontWeight: "600",
                    },
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={()=>{ClaimTokens(contract,2)}}
                >
                  Claim Phase 2
                </Button>
                <Button
                  sx={{
                    background:
                      "rgb(247, 155, 32)",
                    borderRadius: "10px",
                    p: 1,
                    maxWidth: "320px",
                    width: "100%",
                    color: "#fff",
                    border: "2px solid #2C2743",
                    fontSize: "18px",
                    fontWeight: "600",
                    "&:hover": {
                      background:
                        "rgb(255, 255, 255)",
                        color:"black",
                      fontSize: "18px",
                      fontWeight: "600",
                    },
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={()=>{ClaimTokens(contract,3)}}
                >
                  Claim Phase 3
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClaimToken;
