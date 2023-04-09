import React from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import CustomHooks from "./CustomHooks";
import UseEffect from "./UseEffect";
const UseRef = lazy(() => import("./UseRef"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ background: "red" }}>Loading...</div>}>
      <UseEffect />
      {/* <CustomHooks /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
