import { UserContext } from "./UserContext";
import { useContext } from "react";
const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext?.setUser({
      name: "Jaycon",
      email: "jaycon@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> User name is {userContext?.user?.name} </div>
      <div> Email name is {userContext?.user?.email} </div>
      {userContext?.user?.name && (
        <>
          {" "}
          {userContext?.getData.splice(0, 5).map((item: any, index) => {
            return (
              <div key={index}>
                {index + 1}
                {""} {item.title}{" "}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default User;
