import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function BasicSwitches() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ backgroundColor: "white" }}>
            <Grid container justifyContent="center" alignContent="center" rowSpacing={2} columnSpacing={2}>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={0}
                  sx={{ height: 100, width: 100, backgroundColor: "darkred" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={12}
                  sx={{ height: 100, width: 100, backgroundColor: "red" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={4}
                  sx={{ height: 100, width: 100, backgroundColor: "orange" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={16}
                  sx={{ height: 100, width: 100, backgroundColor: "yellow" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={8}
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "lightgreen",
                  }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={20}
                  sx={{ height: 100, width: 100, backgroundColor: "green" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={2}
                  sx={{ height: 100, width: 100, backgroundColor: "cyan" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={14}
                  sx={{ height: 100, width: 100, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={6}
                  sx={{ height: 100, width: 100, backgroundColor: "purple" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={18}
                  sx={{ height: 100, width: 100, backgroundColor: "indigo" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={10}
                  sx={{ height: 100, width: 100, backgroundColor: "violet" }}
                />
              </Grid>
              <Grid item>
                <Paper
                  variant="outlined"
                  elevation={2}
                  sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: "darkviolet",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="first"
          ></FormControlLabel>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch />}
            label="second"
          ></FormControlLabel>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="third"
          ></FormControlLabel>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch />}
            label="fourth"
          ></FormControlLabel>
        </Grid>
      </Grid>
    </div>
  );
}
