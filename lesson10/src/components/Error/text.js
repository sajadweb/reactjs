import React from "react";
import { Typography } from "antd";

const { Text } = Typography;
export function TextError({ children }) {
  return <Text type="danger">{children}</Text>;
}
