import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

export default function SignalLamp({ lamp, timer }) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "black",
      color: "yellow",
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

  const typeChooser = () => {
    switch (lamp.type) {
      case "close":
        return (
          <CloseIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      case "downArrow":
        return (
          <ArrowDownwardIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      case "leftArrow":
        return (
          <ArrowBackIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      case "rightArrow":
        return (
          <ArrowForwardIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      case "upArrow":
        return (
          <ArrowUpwardIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      case "walk":
        return (
          <DirectionsWalkIcon
            sx={{
              height: 40,
              width: 40,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
      default:
        return (
          <CircleIcon
            sx={{
              height: 50,
              width: 50,
              color: lamp.color,
              visibility: lamp.visibility,
            }}
          />
        );
    }
  };

  return (
    <Card sx={{ bgcolor: "black" }}>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          showZero="true"
          // variant="dot"
          badgeContent={timer}
          color="secondary"
        >
          <Avatar sx={{ bgcolor: "black" }}>{typeChooser()}</Avatar>
        </StyledBadge>
      </Stack>
    </Card>
  );
}
