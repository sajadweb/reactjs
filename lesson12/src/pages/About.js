import { useLocation } from "react-router-dom";
export default function About() {
  const location = useLocation();
  return <h2>About {JSON.stringify(location)}</h2>;
}
