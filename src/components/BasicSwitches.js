import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

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
    "magenta",
  ];

  const switchArray = ["first", "second", "third", "fourth"];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

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
                      <Stack direction="row" spacing={2}>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar sx={{ bgcolor: "black" }}>
                            <ArrowBackIcon sx={{ color: "red" }} />
                          </Avatar>
                        </StyledBadge>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar sx={{ bgcolor: "black" }}>
                            <ArrowBackIcon sx={{ color: "yellow" }} />
                          </Avatar>
                        </StyledBadge>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar sx={{ bgcolor: "black" }}>
                            <ArrowBackIcon sx={{ color: "green" }} />
                          </Avatar>
                        </StyledBadge>
                      </Stack>

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
