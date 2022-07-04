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
                duration: 0,
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
                duration: 0,
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
                duration: 0,
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
                duration: 2,
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
                duration: 4,
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
                start: 18,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "solid",
                freq: 0,
                start: 15,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "solid",
                freq: 6,
                start: 9,
                duration: 6,
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
                start: 18,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "rightArrow",
                freq: 0,
                start: 15,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "rightArrow",
                freq: 0,
                start: 9,
                duration: 6,
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
                start: 27,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "leftArrow",
                freq: 0,
                start: 24,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "leftArrow",
                freq: 0,
                start: 20,
                duration: 4,
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
                start: 38,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "solid",
                freq: 0,
                start: 35,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "solid",
                freq: 0,
                start: 29,
                duration: 6,
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
                start: 38,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "rightArrow",
                freq: 0,
                start: 35,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "rightArrow",
                freq: 0,
                start: 29,
                duration: 6,
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
                start: 7,
                duration: 2,
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
                duration: 4,
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
                start: 18,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "solid",
                freq: 0,
                start: 15,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "solid",
                freq: 0,
                start: 9,
                duration: 6,
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
                start: 18,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "rightArrow",
                freq: 0,
                start: 15,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "rightArrow",
                freq: 0,
                start: 9,
                duration: 6,
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
                start: 27,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "leftArrow",
                freq: 0,
                start: 24,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "leftArrow",
                freq: 0,
                start: 20,
                duration: 4,
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
                start: 38,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "solid",
                freq: 0,
                start: 35,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "solid",
                freq: 0,
                start: 29,
                duration: 6,
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
                start: 38,
                duration: 2,
                visibility: "visible",
              },
              {
                lamp: 1,
                vpos: 1,
                hpos: 1,
                color: "yellow",
                type: "rightArrow",
                freq: 0,
                start: 35,
                duration: 3,
                visibility: "hidden",
              },
              {
                lamp: 2,
                vpos: 2,
                hpos: 1,
                color: "green",
                type: "rightArrow",
                freq: 0,
                start: 29,
                duration: 6,
                visibility: "hidden",
              },
            ],
          },
        ],
      },
    ],
  });

  let fullCycle = 40;

  // const balanceSignal = () => {
  //   const redClear = 2;
  //   const redClearShort = 2;
  //   const redClearLong = 2;
  //   const yellowClear = 3;
  //   const greenLeft = 4;
  //   const greenThrough = 6;

  //   signal.phase[1].lane[0].lamp[0].duration = redClearLong;
  //   signal.phase[3].lane[0].lamp[0].duration = redClearLong;
  //   signal.phase[5].lane[0].lamp[0].duration = redClearLong;
  //   signal.phase[7].lane[0].lamp[0].duration = redClearLong;

  //   signal.phase[2].lane[0].lamp[0].duration = redClearShort;
  //   signal.phase[2].lane[1].lamp[0].duration = redClearShort;
  //   signal.phase[4].lane[0].lamp[0].duration = redClearShort;
  //   signal.phase[4].lane[1].lamp[0].duration = redClearShort;
  //   signal.phase[6].lane[0].lamp[0].duration = redClearShort;
  //   signal.phase[6].lane[1].lamp[0].duration = redClearShort;
  //   signal.phase[8].lane[0].lamp[0].duration = redClearShort;
  //   signal.phase[8].lane[1].lamp[0].duration = redClearShort;

  //   signal.phase[1].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[3].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[5].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[7].lane[0].lamp[1].duration = yellowClear;

  //   signal.phase[2].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[2].lane[1].lamp[0].duration = yellowClear;
  //   signal.phase[4].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[4].lane[1].lamp[0].duration = yellowClear;
  //   signal.phase[6].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[6].lane[1].lamp[0].duration = yellowClear;
  //   signal.phase[8].lane[0].lamp[1].duration = yellowClear;
  //   signal.phase[8].lane[1].lamp[0].duration = yellowClear;

  //   signal.phase[1].lane[0].lamp[2].duration = greenLeft;
  //   signal.phase[3].lane[0].lamp[2].duration = greenLeft;
  //   signal.phase[5].lane[0].lamp[2].duration = greenLeft;
  //   signal.phase[7].lane[0].lamp[2].duration = greenLeft;

  //   signal.phase[2].lane[0].lamp[2].duration = greenThrough;
  //   signal.phase[2].lane[1].lamp[2].duration = greenThrough;
  //   signal.phase[4].lane[0].lamp[2].duration = greenThrough;
  //   signal.phase[4].lane[1].lamp[2].duration = greenThrough;
  //   signal.phase[6].lane[0].lamp[2].duration = greenThrough;
  //   signal.phase[6].lane[1].lamp[2].duration = greenThrough;
  //   signal.phase[8].lane[0].lamp[2].duration = greenThrough;
  //   signal.phase[8].lane[1].lamp[2].duration = greenThrough;

  //   for (let i = 1; i < 5; i++) {
  //     signal.phase[i].lane[0].lamp[2].start =
  //       signal.phase[0].lane[0].lamp[0].start +
  //       signal.phase[i].lane[0].lamp[0].duration;
  //     signal.phase[i + 4].lane[0].lamp[2].start =
  //       signal.phase[0].lane[0].lamp[0].start +
  //       signal.phase[i].lane[0].lamp[0].duration;
  //     signal.phase[i].lane[0].lamp[1].start =
  //       signal.phase[i].lane[0].lamp[2].start +
  //       signal.phase[i].lane[0].lamp[2].duration;
  //     signal.phase[i + 4].lane[0].lamp[1].start =
  //       signal.phase[i].lane[0].lamp[2].start +
  //       signal.phase[i].lane[0].lamp[2].duration;
  //     signal.phase[i].lane[0].lamp[0].start =
  //       signal.phase[i].lane[0].lamp[1].start +
  //       signal.phase[i].lane[0].lamp[1].duration;
  //     signal.phase[i + 4].lane[0].lamp[0].start =
  //       signal.phase[i].lane[0].lamp[1].start +
  //       signal.phase[i].lane[0].lamp[1].duration;
  //   }

  //   fullCycle =
  //     signal.phase[8].lane[0].lamp[0].start +
  //     signal.phase[8].lane[0].lamp[0].duration;
  // };

  const runSignal = () => {
    signal.phase.map((element) => {
      element.lane.map((element) => {
        let laneActive = false;
        element.lamp.map((element, index) => {
          if (
            timer >= element.start &&
            timer < element.start + element.duration
          ) {
            element.visibility = "visible";
            laneActive = true;
          } else {
            element.visibility = "hidden";
          }
        });
        if (!laneActive) {
          element.lamp[0].visibility = "visible";
        }
      });
    });
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      // balanceSignal();
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
