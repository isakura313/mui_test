import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function MiddlePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 528,
          height: 1000,
        },
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3} />
    </Box>
  );
}
