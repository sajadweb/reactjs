import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
/**
 * use Auto Focus
 * @returns element
 */
const useAutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
};

function AppFocus() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  // const focusInput = useCallback(() => {
  //   inputElement.current.focus();
  // }, []);
  return (
    <>
      <h2> App Focus</h2>
      <input type="text" />
      <br />
      <input type="text" ref={inputElement} />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
function AppPrevious() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const inputFocus = useAutoFocus();

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h2>App Previous</h2>
      <input
        type="text"
        value={inputValue}
        ref={inputFocus}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const ExampleDemoUseRef = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  console.log("render everytime.");
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
    alert(`${email} with password= ${password}`);
  };
  return (
    <div>
      <h1>useRef</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" ref={passwordRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
const ExampleDemoUseState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   useEffect(() => {
    console.log("render everytime.");
//   });
  const handleSubmit = () => {
    console.log({ email, password });
    alert(`${email} with password= ${password}`);
  };
  return (
    <div>
      <h1>useRef</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

// export default ExampleDemoUseState;
export default ExampleDemoUseRef;
