import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

export default function SignalHead({ type, color, frequency }) {
  const typeChooser = () => {
    switch (type) {
      case "close":
        return <CloseIcon sx={{ height: 50, width: 50, color: color }} />;
      case "downArrow":
        return (
          <ArrowDownwardIcon sx={{ height: 50, width: 50, color: color }} />
        );
      case "leftArrow":
        return <ArrowBackIcon sx={{ height: 50, width: 50, color: color }} />;
      case "rightArrow":
        return (
          <ArrowForwardIcon sx={{ height: 50, width: 50, color: color }} />
        );
      case "upArrow":
        return <ArrowUpwardIcon sx={{ height: 50, width: 50, color: color }} />;
      case "walk":
        return (
          <DirectionsWalkIcon sx={{ height: 40, width: 40, color: color }} />
        );
      default:
        return <CircleIcon sx={{ height: 50, width: 50, color: color }} />;
    }
  };

  return (
    <Card sx={{ background: "black" }}>
      <Avatar sx={{ bgcolor: "black" }}>{typeChooser()}</Avatar>
    </Card>
  );
}
