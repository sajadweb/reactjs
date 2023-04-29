import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Users from "../pages/Users";
import Home from "../pages/Home";
import { User } from "../pages/User";
import UserNew from "../pages/UserNew";
import NotFound from "../pages/404";

export default function Sample1() {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users/new">User new</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home title={"title"} />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/new" element={<UserNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
