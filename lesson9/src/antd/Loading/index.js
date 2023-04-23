import React from "react";
import { Spin } from "antd";
import "./style.css";
export const Loading = () => (
  <div className="loading">
    <Spin tip="Loading">
      <div className="content" />
    </Spin>
  </div>
);
