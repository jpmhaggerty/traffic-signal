import * as React from "react";
import Card from "@mui/material/Card";
import SignalLamp from "./SignalLamp.js";

export default function SignalLane({ lane, timer }) {
  return (
    <Card sx={{ backgroundColor: "black", display: "inline-grid" }}>
      {lane.lamp.map((element, index) => {
        return <SignalLamp key={index} lamp={element} timer={timer} />;
      })}
    </Card>
  );
}
