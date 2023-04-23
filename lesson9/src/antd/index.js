import React, { Suspense, lazy } from "react";
import { Button, Modal, QRCode, Space,version } from "antd";
import { Theme } from "./Themes";
import { LayoutUi } from "./Layout";
import { Loading } from "./Loading";
const Form = lazy(() => import("./Form"));
const { confirm } = Modal;
const destroyAll = () => {
  Modal.destroyAll();
};
const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        // icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    }, i * 500);
  }
};
export default function App() {
  return (
    <Theme direction="ltr" componentSize="large">
      <LayoutUi>
        <Suspense fallback={<Loading />}>
        <h1>antd version: {version}</h1>
      <Button onClick={showConfirm}>Confirm</Button>
      <Space>
        <QRCode
          errorLevel="H"
          value="https://ant.design/"
          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
      </Space>
      <br />
      <br />
      <Space>
        <Form />
      </Space>
        </Suspense>
      </LayoutUi>
    </Theme>
  );
}
