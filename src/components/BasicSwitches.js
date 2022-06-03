import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function BasicSwitches() {
  const colorArray = [
    "white",
    "darkred",
    "red",
    "orange",
    "yellow",
    "lightgreen",
    "green",
    "cyan",
    "blue",
    "purple",
    "indigo",
    "violet",
    "darkviolet",
  ];

  const switchArray = ["first", "second", "third", "fourth"];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ backgroundColor: "white" }}>
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              rowSpacing={2}
              columnSpacing={2}
            >
              {colorArray.map((element, index) => {
                return (
                  <Grid key={index} item>
                    <Paper
                      variant="outlined"
                      elevation={index}
                      sx={{ height: 100, width: 100, backgroundColor: element }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {switchArray.map((element, index) => {
            return (
              <FormControlLabel
                key={index}
                control={<Switch defaultChecked />}
                label={element}
              ></FormControlLabel>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
