import * as React from "react";
import Card from "@mui/material/Card";
import SignalLane from "./SignalLane.js";

export default function SignalPhase({ phase, timer }) {
  return (
    <Card sx={{ backgroundColor: "black", display: "inline-grid" }}>
      {phase.lane.map((element, index) => {
        return <SignalLane key={index} lane={element} timer={timer} />;
      })}
    </Card>
  );
}
