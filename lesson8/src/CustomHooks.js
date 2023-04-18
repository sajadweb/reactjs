import { useEffect } from "react";
import useFetch from "./useFetch";

const App = () => {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  useEffect(() => {
    console.log("first");
    return () => {
      console.log("close2");
    };
  }, [loading]);

  return (
    <>
      {loading && <>loading...</>}
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default App;
