import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

export default function SignalFace({ color, type, mode }) {
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


  const typeChooser = () => {
    let typeJSX;
    switch (type) {
      case "leftArrow":
        typeJSX =  (
          <Avatar sx={{ bgcolor: "black" }}>
            <ArrowBackIcon sx={{ color: color }} />
          </Avatar>
        );
        break;
        case "rightArrow":
          typeJSX = (
            <Avatar sx={{ bgcolor: "black" }}>
              <ArrowForwardIcon sx={{ color: color }} />
            </Avatar>
          );
          break;
      default:
        typeJSX = ( <Avatar sx={{ bgcolor: color }}> </Avatar>);
    }
    return typeJSX;
  };

  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        {typeChooser()}
      </StyledBadge>
    </Stack>
  );
}
