import React from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";
import { useState } from "react";
class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      displayBio: true,
      bio: "javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram",
    };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {
    const bio = this.state.displayBio ? this.state.bio : "no bio";
    return (
      <>
        bio: {bio}
        {/* bio: {this.props?.bio} */}
        <br />
        <button onClick={this.toggleDisplayBio}> toggle bio </button>
      </>
    );
  }
}
const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState();
  console.log("count", count);
  function incCount() {
    setCount((omid) => {
      return 1 + omid;
    });
  }
  function loginUser() {
    //api login
    setUser({
      name: "Omid",
      bio: "it is bio",
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={incCount}> count + </button>
        <p>
          {/* <input name="name" onChange={} /> */}
          <input name="bio" />
          <input name="number" />
          <button onClick={incCount}> Login </button>
          <Bio
            phoneNumber="dszcsd"
            count={count}
            x="23"
            y={34}
            name={user?.name}
            bio={user?.bio}
          />
        </p>
        <button onClick={loginUser}> set user </button>
      </header>
    </div>
  );
};
function Bio({ name, bio, ...props }) {
  console.log("bio", name);
  console.log("props", props);
  return (
    <>
      {/* {JSON.stringify(props)} */}
      <br />
      my name is {name},
      <br />
      bio: {bio}
    </>
  );
}
Bio.defaultProps = {
  name: "no name",
  bio: "no bio",
};
Bio.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propStringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  phoneNumber: function (props, propName, componentName) {
    //conditions check props ok or no
    console.log("props[propName]", props[propName]);
    // if (props[propName]) {
    return new Error("Validation failed! Omid ccheck it on home");
    // }
  },
};
export default App;
