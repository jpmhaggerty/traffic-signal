import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SignalFace from "./SignalFace.js";

export default function SignalHead({ signal }) {
  let keyLamp = 0;
  let lampJSX;
  let gooby = signal.map((phase, phaseIndex) => {
    if (phase.length > 0) {
      phase.map((lane, laneIndex) => {
        if (lane.length > 0) {
          lane.map((lamp, lampIndex) => {
            keyLamp = phaseIndex * 100 + laneIndex * 10 + lampIndex;
            lampJSX = (
              <SignalFace
                key={keyLamp}
                color={lamp[0]}
                type={lamp[1]}
                mode={lamp[2]}
              />
            );
            return lampJSX;
          });
        }
        return lampJSX;
      });
    }
    return lampJSX;
  });
}
