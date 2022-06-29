import * as React from "react";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

import SignalHead from "./SignalHead.js";

export default function BasicSwitches() {
  const [timer, setTimer] = useState(0);
  const [type, setType] = useState("close");
  const [signal, setSignal] = useState([
    //Phase 0
    [],
    //Phase 1
    [
      [
        ["red", "leftArrow", "flash"],
        ["yellow", "leftArrow", "flash"],
        ["green", "leftArrow", "flash"],
      ],
    ],
    //Phase 2
    [
      [
        ["red", "solid", "flash"],
        ["yellow", "solid", "flash"],
        ["green", "solid", "flash"],
      ],
      [
        ["red", "rightArrow", "flash"],
        ["yellow", "rightArrow", "flash"],
        ["green", "rightArrow", "flash"],
      ],
    ],
    //Phase 3
    [
      [
        ["red", "leftArrow", "flash"],
        ["yellow", "leftArrow", "flash"],
        ["green", "leftArrow", "flash"],
      ],
    ],
    //Phase 4
    [
      [
        ["red", "solid", "flash"],
        ["yellow", "solid", "flash"],
        ["green", "solid", "flash"],
      ],
      [
        ["red", "rightArrow", "flash"],
        ["yellow", "rightArrow", "flash"],
        ["green", "rightArrow", "flash"],
      ],
    ],
    //Phase 5
    [
      [
        ["red", "leftArrow", "flash"],
        ["yellow", "leftArrow", "flash"],
        ["green", "leftArrow", "flash"],
      ],
    ],
    //Phase 6
    [
      [
        ["red", "solid", "flash"],
        ["yellow", "solid", "flash"],
        ["green", "solid", "flash"],
      ],
      [
        ["red", "rightArrow", "flash"],
        ["yellow", "rightArrow", "flash"],
        ["green", "rightArrow", "flash"],
      ],
    ],
    //Phase 7
    [
      [
        ["red", "leftArrow", "flash"],
        ["yellow", "leftArrow", "flash"],
        ["green", "leftArrow", "flash"],
      ],
    ],
    //Phase 8
    [
      [
        ["red", "solid", "flash"],
        ["yellow", "solid", "flash"],
        ["green", "solid", "flash"],
      ],
      [
        ["red", "rightArrow", "flash"],
        ["yellow", "rightArrow", "flash"],
        ["green", "rightArrow", "flash"],
      ],
    ],
  ]);

  let color = "yellow";
  let frequency = 0;

  let fullCycle = 15;
  let timeStep = 1000;

  let upperLamp = "red";
  let middleLamp = "yellow";
  let lowerLamp = "green";

  const switchArray = ["leftArrow", "solid", "rightArrow"];

  const colorArray = [
    [
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
    ],
    [
      "#222222",
      "#333333",
      "#444444",
      "#555555",
      "#666666",
      "#777777",
      "#888888",
      "#999999",
      "#AAAAAA",
      "#BBBBBB",
      "#CCCCCC",
      "#DDDDDD",
    ],
  ];

  let signalSpec = [
    [upperLamp, type, "flash"],
    [middleLamp, type, "flash"],
    [lowerLamp, type, "flash"],
  ];

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

  useEffect(() => {
    const timerID = setInterval(() => {
      //run lamp toggles
      if (timer === fullCycle) {
        setTimer(0);
      } else {
        setTimer(timer + 1);
      }
    }, timeStep);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ backgroundColor: "black" }} square={true}>
            <SignalHead type={type} color={color} frequency={frequency} />
            <SignalHead type={type} color={color} frequency={frequency} />
            <SignalHead type={type} color={color} frequency={frequency} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
