import { createContext, useEffect, useState } from "react";
export type AuthUser = {
  name: string;
  email: string;
  render?: boolean;
};

type UserContextProps = {
  children: React.ReactNode;
};
type UserType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  getData: [];
};
export const UserContext = createContext<UserType | null>(null);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [getData, setData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getData }}>
      {children}
    </UserContext.Provider>
  );
};
