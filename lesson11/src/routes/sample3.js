import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "../pages/About";
import Users from "../pages/Users";
import Home from "../pages/Home";
import { User } from "../pages/User";
import { LayoutUi } from "../components";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserNew from "../pages/UserNew";
import NotFound from "../pages/404";

function App() {
  const navigate = useNavigate();
  function go(route) {
    navigate(route.key);
  }
  const items2 = [
    {
      key: `/home`,
      icon: React.createElement(LaptopOutlined),
      label: `Home`,
    },
    {
      key: `/about`,
      icon: React.createElement(NotificationOutlined),
      label: `About`,
    },
    {
      key: `/users`,
      icon: React.createElement(UserOutlined),
      label: `Users`,
      children: [
        {
          key: "users",
          label: `list user`,
        },
        {
          key: "users/new",
          label: `user new`,
        },
      ],
    },
  ];
  return (
    <LayoutUi items={items2} go={go}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="new" element={<UserNew />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutUi>
  );
}
//
function UserRoute(params) {
  console.log("params", params);
  return (
    <Route {...params}>
      <Route index element={<Users />} />
      <Route path=":id" element={<User />} />
      <Route path="new" element={<UserNew />} />
    </Route>
  );
}
export default function Sample3() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
//Outlet
//const context = useOutletContext()
//useSearchParams({ n: 3 })