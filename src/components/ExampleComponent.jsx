import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 2,
          width: 628,
          height: 728,
        },
      }}
    >
      <Paper elevation={3}>
        <h2>Example</h2>

        <h3>Заголовок поменьше</h3>
        <h4>Еще меньше</h4>
        <ul>
          <li> 1 </li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </Paper>
      {/* <Paper /> */}
      <Paper elevation={3} />
    </Box>
  );
}
