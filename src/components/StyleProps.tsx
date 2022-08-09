import React from "react";

interface ForStyleProps {
  styles: React.CSSProperties;
}
const StyleProps = ({ styles }: ForStyleProps) => {
  return <div style={styles}>StyleProps</div>;
};

export default StyleProps;
