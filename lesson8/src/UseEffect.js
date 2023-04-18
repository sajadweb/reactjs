import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("first");
    return () => {
      console.log("close2");
    };
  }, [loading]);

  return (
    <>
      {loading && <Timer />}
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        toggel Timer
      </button>
    </>
  );
};
const Timer = () => {
  const [counter, setCounter] = useState(0);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      console.log("ccccc", counter);
      setCounter((c) => c + 1);
    }, 1000);
    return () => {
      timer && clearInterval(timer);
    };
  },[]);
  return <>counter</>;
};
export default App;
