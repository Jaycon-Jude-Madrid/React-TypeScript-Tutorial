import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);

  return <div style={{ backgroundColor: theme.primay.main }}>Box</div>;
};

export default Box;
