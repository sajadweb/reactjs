import React from "react";
import {
  Button,
  Title,
  Wrapper,
  TomatoButton,
  ReversedButton,
  PriceFormat,
  Input,
  Thing,
  LabelText,
  Label,
  InputUi,
  GlobalStyle,
} from "./components";

export default function Styled() {
  return (
    <>
      <GlobalStyle />
      <Wrapper >
        <h1 />
        <Label>
          <InputUi defaultChecked />
          <LabelText>Foo</LabelText>
        </Label>
        <Label>
          <InputUi />
          <LabelText $mode="dark">Foo</LabelText>
        </Label>
        <Label>
          <InputUi defaultChecked />
          <LabelText>Foo</LabelText>
        </Label>
        <Label>
          <InputUi defaultChecked />
          <LabelText $mode="dark">Foo</LabelText>
        </Label>
        <h1 />
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div className="red">class red, Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
        <hr />
        <Title>Hi Sajjad</Title>
        <Button $primary={true}>primary 1</Button>
        <Button>Normal</Button>
        <Button $primary>primary 2</Button>
        <hr />
        <TomatoButton>Normal</TomatoButton>
        <TomatoButton $primary>primary 2</TomatoButton>
        <hr />
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles 1 2 3 4 5 6 7 8 9
        </Button>
        <hr /> <Title>PriceFormat</Title>
        <Button as={PriceFormat}>20000</Button>
        <Title>output = 20,000 </Title>
        <hr /> <Title>Input</Title>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" inputColor="blue" />
      </Wrapper>
    </>
  );
}
