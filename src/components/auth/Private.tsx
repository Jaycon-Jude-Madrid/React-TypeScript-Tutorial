import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";
interface PrivateProps {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
}

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  return <div>{isLoggedIn ? <Component name="madrid" /> : <Login />}</div>;
};

export default Private;
