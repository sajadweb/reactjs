import React from "react";
import { LayoutUi, Theme } from "./components";
import Sample1 from "./react-hook-form/sample1";
import { Sample2 } from "./react-hook-form/sample2";
import Example3 from "./react-hook-form/example3";
import { Example4 } from "./react-hook-form/example4";
import ValidationJoiHome from "./joi/ValidationJoiHome";
function Name() {
  return <ValidationJoiHome />;
}
function Name2() {
  return Name();
}
export default function App() {
  return (
    <Theme direction="ltr">
      <LayoutUi>
        {/* <Sample1 /> */}
        {/* <Sample2 /> */}
        {/* <Example3 /> */}
        <Example4 />
        <br />
        <br />
        <br />
        <h1>use joi</h1>
        <Name2 />
      </LayoutUi>
    </Theme>
  );
}
