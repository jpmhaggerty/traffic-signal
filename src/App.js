import * as React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import SignalPhase from "./components/SignalPhase.js";

export default function App() {
  const timeStep = 1000;
  const [timer, setTimer] = useState(0);
  const [signal, setSignal] = useState({
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
                visibility: "visible",
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
                active: false,
                visibility: "hidden",
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
                visibility: "visible",
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
                start: 7,
                duration: 4,
                active: true,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "leftArrow",
                freq: 0,
                start: 4,
                duration: 3,
                active: false,
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
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
                visibility: "visible",
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
                visibility: "hidden",
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
                visibility: "hidden",
              },
            ],
          },
        ],
      },
    ],
  });

  let fullCycle = 40;

  const runSignal = () => {
    let tempSignal = signal;

    switch (timer) {
      case tempSignal.phase[1].lane[0].lamp[0].start:
        tempSignal.phase[1].lane[0].lamp.map((element) => {
          element.visibility = "hidden";
        });
        tempSignal.phase[1].lane[0].lamp[0].visibility = "visible";
        break;
      case tempSignal.phase[1].lane[0].lamp[1].start:
        tempSignal.phase[1].lane[0].lamp.map((element) => {
          element.visibility = "hidden";
        });
        tempSignal.phase[1].lane[0].lamp[1].visibility = "visible";
        break;
      case tempSignal.phase[1].lane[0].lamp[2].start:
        tempSignal.phase[1].lane[0].lamp.map((element) => {
          element.visibility = "hidden";
        });
        tempSignal.phase[1].lane[0].lamp[2].visibility = "visible";
        break;
    }
    setSignal(tempSignal);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
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
      {signal.phase.map((element, index) => {
        return <SignalPhase key={index} phase={element} timer={timer} />;
      })}
    </div>
  );
}
