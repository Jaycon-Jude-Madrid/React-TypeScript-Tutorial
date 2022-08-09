import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
  password: string;
};
const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<AuthUser | null>(null);

  const BtnLoggedIn = () => {
    setIsLoggedIn({
      name: "21",
      email: "yaoN@text.com",
      password: "2312",
    });
  };

  const BtnLoggedOut = () => {
    setIsLoggedIn(null);
  };

  return (
    <div>
      <button onClick={BtnLoggedIn}>Login</button>
      <button onClick={BtnLoggedOut}>Logout</button>
      <div> User name is {isLoggedIn?.name}</div>
      <div> User email is {isLoggedIn?.email}</div>
      <h4>{isLoggedIn ? "isLoggedIn" : "isLoggedOut"}</h4>
    </div>
  );
};
export default IsLoggedIn;
