import * as React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import SignalAssembly from "./components/SignalAssembly.js";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [signal, setSignal] = useState([
    //Color, Type, Frequency, Active
    //Phase 0
    [
      [
        ["red", "close", 0],
        1,
        ["yellow", "close", 0, 1],
        ["red", "walk", 0, 1],
        ["white", "walk", 0, 1],
        ["red", "upArrow", 0, 1],
        ["green", "upArrow", 0, 1],
      ],
    ],
    //Phase 1
    [
      [
        ["red", "leftArrow", 0, 1],
        ["yellow", "leftArrow", 0, 0],
        ["green", "leftArrow", 0, 0],
      ],
    ],
    //Phase 2
    [
      [
        ["red", "solid", 0, 1],
        ["yellow", "solid", 0, 0],
        ["green", "solid", 0, 0],
      ],
      [
        ["red", "rightArrow", 0, 1],
        ["yellow", "rightArrow", 0, 0],
        ["green", "rightArrow", 0, 0],
      ],
    ],
    //Phase 3
    [
      [
        ["red", "leftArrow", 0, 1],
        ["yellow", "leftArrow", 0, 0],
        ["green", "leftArrow", 0, 0],
      ],
    ],
    //Phase 4
    [
      [
        ["red", "solid", 0, 1],
        ["yellow", "solid", 0, 0],
        ["green", "solid", 0, 0],
      ],
      [
        ["red", "rightArrow", 0, 1],
        ["yellow", "rightArrow", 0, 0],
        ["green", "rightArrow", 0, 0],
      ],
    ],
    //Phase 5
    [
      [
        ["red", "leftArrow", 0, 1],
        ["yellow", "leftArrow", 0, 0],
        ["green", "leftArrow", 0, 0],
      ],
    ],
    //Phase 6
    [
      [
        ["red", "solid", 0, 1],
        ["yellow", "solid", 0, 0],
        ["green", "solid", 0, 0],
      ],
      [
        ["red", "rightArrow", 0, 1],
        ["yellow", "rightArrow", 0, 0],
        ["green", "rightArrow", 0, 0],
      ],
    ],
    //Phase 7
    [
      [
        ["red", "leftArrow", 0, 1],
        ["yellow", "leftArrow", 0, 0],
        ["green", "leftArrow", 0, 0],
      ],
    ],
    //Phase 8
    [
      [
        ["red", "solid", 0, 1],
        ["yellow", "solid", 0, 0],
        ["green", "solid", 0, 0],
      ],
      [
        ["red", "rightArrow", 0, 1],
        ["yellow", "rightArrow", 0, 0],
        ["green", "rightArrow", 0, 0],
      ],
    ],
    //Phase All
    {
      phase: [
        {
          phase: 0,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "close",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "close",
                  freq: 1,
                  start: 0,
                  duration: 3,
                  active: true,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "yellow",
                  type: "close",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: true,
                },
              ],
            },
          ],
        },
        {
          phase: 1,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 2,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
            {
              lane: 1,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 3,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 4,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
            {
              lane: 1,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 5,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 6,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
            {
              lane: 1,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 7,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "leftArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          phase: 8,
          lane: [
            {
              lane: 0,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "solid",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
            {
              lane: 1,
              lamp: [
                {
                  lamp: 0,
                  vpos: 0,
                  hpos: 1,
                  color: "red",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 4,
                  active: true,
                },
                {
                  lamp: 1,
                  vpos: 1,
                  hpos: 1,
                  color: "yellow",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 3,
                  active: false,
                },
                {
                  lamp: 2,
                  vpos: 2,
                  hpos: 1,
                  color: "green",
                  type: "rightArrow",
                  freq: 0,
                  start: 0,
                  duration: 6,
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  let fullCycle = 40;
  let timeStep = 1000;

  const runSignal = () => {
    let tempSignal = signal;

    let leftTurnDuration = 4;
    let throughTurnDuration = 6;
    let yellowClearDuration = 3;
    let redClearDuration = 2;

    let phase1GreenStart = 0;
    let phase1GreenDuration = leftTurnDuration;
    let phase1YellowStart = phase1GreenStart + phase1GreenDuration;
    let phase1RedStart = phase1YellowStart + yellowClearDuration;

    let phase2GreenStart = phase1RedStart + redClearDuration;
    let phase2GreenDuration = throughTurnDuration;
    let phase2YellowStart = phase2GreenStart + phase2GreenDuration;
    let phase2RedStart = phase2YellowStart + yellowClearDuration;

    let phase3GreenStart = phase2RedStart + redClearDuration;
    let phase3GreenDuration = leftTurnDuration;
    let phase3YellowStart = phase3GreenStart + phase3GreenDuration;
    let phase3RedStart = phase3YellowStart + yellowClearDuration;

    let phase4GreenStart = phase3RedStart + redClearDuration;
    let phase4GreenDuration = throughTurnDuration;
    let phase4YellowStart = phase4GreenStart + phase4GreenDuration;
    let phase4RedStart = phase4YellowStart + yellowClearDuration;

    let phase5GreenStart = 0;
    let phase5GreenDuration = leftTurnDuration;
    let phase5YellowStart = phase5GreenStart + phase5GreenDuration;
    let phase5RedStart = phase5YellowStart + yellowClearDuration;

    let phase6GreenStart = phase5RedStart + redClearDuration;
    let phase6GreenDuration = throughTurnDuration;
    let phase6YellowStart = phase6GreenStart + phase6GreenDuration;
    let phase6RedStart = phase6YellowStart + yellowClearDuration;

    let phase7GreenStart = phase6RedStart + redClearDuration;
    let phase7GreenDuration = leftTurnDuration;
    let phase7YellowStart = phase7GreenStart + phase7GreenDuration;
    let phase7RedStart = phase7YellowStart + yellowClearDuration;

    let phase8GreenStart = phase7RedStart + redClearDuration;
    let phase8GreenDuration = throughTurnDuration;
    let phase8YellowStart = phase8GreenStart + phase8GreenDuration;
    let phase8RedStart = phase8YellowStart + yellowClearDuration;

    switch (timer) {
      case phase1GreenStart:
        tempSignal[1][0][0][3] = 0;
        tempSignal[1][0][2][3] = 1;
        break;
      case phase1YellowStart:
        tempSignal[1][0][1][3] = 1;
        tempSignal[1][0][2][3] = 0;
        break;
      case phase1RedStart:
        tempSignal[1][0][0][3] = 1;
        tempSignal[1][0][1][3] = 0;
        break;
      case phase2GreenStart:
        tempSignal[2][0][0][3] = 0;
        tempSignal[2][0][2][3] = 1;
        break;
      case phase2YellowStart:
        tempSignal[2][0][1][3] = 1;
        tempSignal[2][0][2][3] = 0;
        break;
      case phase2RedStart:
        tempSignal[2][0][0][3] = 1;
        tempSignal[2][0][1][3] = 0;
        break;
      case phase3GreenStart:
        tempSignal[3][0][0][3] = 0;
        tempSignal[3][0][2][3] = 1;
        break;
      case phase3YellowStart:
        tempSignal[3][0][1][3] = 1;
        tempSignal[3][0][2][3] = 0;
        break;
      case phase3RedStart:
        tempSignal[3][0][0][3] = 1;
        tempSignal[3][0][1][3] = 0;
        break;
      case phase4GreenStart:
        tempSignal[4][0][0][3] = 0;
        tempSignal[4][0][2][3] = 1;
        break;
      case phase4YellowStart:
        tempSignal[4][0][1][3] = 1;
        tempSignal[4][0][2][3] = 0;
        break;
      case phase4RedStart:
        tempSignal[4][0][0][3] = 1;
        tempSignal[4][0][1][3] = 0;
        break;
      case phase5GreenStart:
        tempSignal[5][0][0][3] = 0;
        tempSignal[5][0][2][3] = 1;
        break;
      case phase5YellowStart:
        tempSignal[5][0][1][3] = 1;
        tempSignal[5][0][2][3] = 0;
        break;
      case phase5RedStart:
        tempSignal[5][0][0][3] = 1;
        tempSignal[5][0][1][3] = 0;
        break;
      case phase6GreenStart:
        tempSignal[6][0][0][3] = 0;
        tempSignal[6][0][2][3] = 1;
        break;
      case phase6YellowStart:
        tempSignal[6][0][1][3] = 1;
        tempSignal[6][0][2][3] = 0;
        break;
      case phase6RedStart:
        tempSignal[6][0][0][3] = 1;
        tempSignal[6][0][1][3] = 0;
        break;
      case phase7GreenStart:
        tempSignal[7][0][0][3] = 0;
        tempSignal[7][0][2][3] = 1;
        break;
      case phase7YellowStart:
        tempSignal[7][0][1][3] = 1;
        tempSignal[7][0][2][3] = 0;
        break;
      case phase7RedStart:
        tempSignal[7][0][0][3] = 1;
        tempSignal[7][0][1][3] = 0;
        break;
      case phase8GreenStart:
        tempSignal[8][0][0][3] = 0;
        tempSignal[8][0][2][3] = 1;
        break;
      case phase8YellowStart:
        tempSignal[8][0][1][3] = 1;
        tempSignal[8][0][2][3] = 0;
        break;
      case phase8RedStart:
        tempSignal[8][0][0][3] = 1;
        tempSignal[8][0][1][3] = 0;
        break;
    }
    setSignal(tempSignal);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      //run lamp toggles
      runSignal();
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
      {signal.map((element, index) => {
        return (
          <SignalAssembly
            key={index}
            laneConfiguration={element[0]}
            timer={timer}
          />
        );
      })}
    </div>
  );
}
