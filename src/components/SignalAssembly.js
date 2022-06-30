import * as React from "react";
import Card from "@mui/material/Card";
import SignalHead from "./SignalHead.js";

export default function SignalAssembly({ laneConfiguration, timer }) {

  return (
    <Card sx={{ backgroundColor: "black", display: "inline-grid" }}>
      {laneConfiguration.map((element, index) => {
        return (
          <SignalHead
            key={index}
            color={element[0]}
            type={element[1]}
            // frequency={frequency}
            timer={timer}
          />
        );
      })}
    </Card>
  );
}
