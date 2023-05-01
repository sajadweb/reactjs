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
import TodoList from "../pages/todo/list";
import TodoNew from "../pages/todo/new";
import { TodoProvider } from "../context";
import TodoEdit from "../pages/todo/edit";

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
    {
      key: `/todo`,
      icon: React.createElement(UserOutlined),
      label: `Todo`,
      children: [
        {
          key: "todo",
          label: `list todo`,
        },
        {
          key: "todo/new",
          label: `user new`,
        },
      ],
    },
  ];
  return (
    <LayoutUi items={items2} go={go}>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
            <Route path="new" element={<UserNew />} />
          </Route>
          <Route path="/todo">
            <Route index element={<TodoList />} />
            <Route path="new" element={<TodoNew />} />
            <Route path=":id" element={<TodoEdit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TodoProvider>
    </LayoutUi>
  );
}

export default function RouteList() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
