import React from "react";
import { Theme } from "./components";
import Sample1 from "./routes/sample1";
import Sample2 from "./routes/sample2";
import Sample3 from "./routes/sample3";

export default function App() {
  return (
    <Theme direction="ltr">
      <Sample3 />
      {/* <Sample2 /> */}
      {/* <Sample1 /> */}
    </Theme>
  );
}
