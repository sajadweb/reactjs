import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createContext } from "react";
import { useContext } from "react";

const MyComponent = () => {
  const currentUser = useContext(CurrentUserContext);

  return <p>Name: {currentUser?.username}.</p>;
};
interface ICurrentUserContextType {
  username: string;
}

const CurrentUserContext = createContext<ICurrentUserContextType | null>(null);
const App3 = () => {
  const [currentUser, setCurrentUser] = useState<ICurrentUserContextType>({
    username: "filiptammergard",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
     <MyComponent />
    </CurrentUserContext.Provider>
  );
};
export interface IProps {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean;
}



const PrintName: React.FC<IProps> = (props): JSX.Element => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  );
};
const PrintName1 = (props: IProps): JSX.Element => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  );
}
const getPrintName = (props: IProps): string => {
  return props.name;
};

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class App2 extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <PrintName name={"32242"} priority={true} />
        <PrintName1 name={"32242"} priority={true} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
