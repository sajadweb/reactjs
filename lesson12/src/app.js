import React from "react";
import { Theme } from "./components";
import RouteList from "./routes";

export default function App() {
  return (
    <Theme direction="ltr">
      <RouteList />
    </Theme>
  );
}
