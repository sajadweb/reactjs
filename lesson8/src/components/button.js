import styled from "styled-components";
/* Adapt the colors based on primary prop */
export const Button = styled.button`
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
export const TomatoButton = styled(Button)`
  color: blue;
  border-color: blue;
`;

export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);
//example
//10000
//10,000
export const PriceFormat = (props) => (
    <Button {...props} children={props.children.split("").reverse()} />
  );