import * as React from "react";

export default function SignalHead({ type, color, mode, id, frequency }) {
  const builder = () => {
    jsxOutput;
    if (mode==="solid") {
      jsxOutput = (
      <Avatar sx={{bground = "black", color = color}}/>
)
    }
    return jsxOutput;
  }

  return (
    <div>
      <Card>
        {builder()}
        </Card>>
    </div>
  );
}
