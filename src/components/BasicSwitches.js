import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BasicSwitches() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const colorArray = [
    "white",
    "red",
    "orange",
    "yellow",
    "lightgreen",
    "green",
    "cyan",
    "blue",
    "violet",
    "purple",
    "indigo",
    "darkviolet",
    "magenta"
  ];

  const switchArray = ["first", "second", "third", "fourth"];

  useEffect(() => {
    let today = new Date();
    const timer = setInterval(() => {
      setSeconds(today.getSeconds() + 1);
      setMinutes(today.getMinutes());
      setHours(today.getHours());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "gray" }} square={true}>
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
                    <Card
                      alignContent="center"
                      justifyContent="center"
                      elevation={index}
                      sx={{ height: 150, width: 100, backgroundColor: element }}
                    >
                      <Avatar sx={{ bgcolor: "red" }}>R</Avatar>
                      <Avatar sx={{ bgcolor: "yellow" }}>Y</Avatar>
                      <Avatar sx={{ bgcolor: "green" }}>
                        <ArrowBackIcon />
                      </Avatar>
                      {hours}
                      {":"}
                      {minutes}
                      {":"}
                      {seconds - 1}
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Card>
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
