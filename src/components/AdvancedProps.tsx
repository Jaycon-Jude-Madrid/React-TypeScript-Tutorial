import React from "react";

interface Props {
  children: React.ReactNode;
}
const AdvancedProps = ({ children }: Props) => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h5>This is an advancedProps</h5>
      {children}
    </div>
  );
};

export default AdvancedProps;
