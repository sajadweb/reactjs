import React from "react";
import { ConfigProvider } from "antd";
import PropTypes from "prop-types";
import "antd/dist/reset.css";
//componentSize small,middle,large
const Theme = ({ direction = "rtl", componentSize = "large", ...props }) => {
  return (
    <ConfigProvider
      direction={direction}
      componentSize={componentSize}
      theme={{
        token: {
          colorPrimary: '#ff0000',//"#00b96b",
          borderRadius: 6,
        },
      }}
      {...props}
    />
  );
};
Theme.propTypes = {
  direction: PropTypes.oneOf(["rtl", "ltr"]),
  componentSize: PropTypes.oneOf(["large", "middle", "small"]),
};

export { Theme };
