import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
// Define our `fg` and `bg` on the theme
const themeDark = {
  bg: "#000",
  fg: "#fff",
};
const themeLight = {
  bg: "#fff",
  fg: "red",
};
 
export default function Theam() {
  return (
    <ThemeProvider theme={themeDark}>
      <div>
        <Button>Dark Theme</Button>

        <ThemeProvider theme={themeLight}>
          <Button>theme Light </Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}
