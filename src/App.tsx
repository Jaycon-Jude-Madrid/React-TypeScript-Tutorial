import React, { useState } from "react";
import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import AdvancedProps from "./components/AdvancedProps";
import Children from "./components/Children";
import AllTypesProps from "./components/AllTypesProps";
import List from "./components/generics/List";
import EventProps from "./components/EventProps";
import StyleProps from "./components/StyleProps";
import IsLoggedIn from "./components/state/isLoggedIn";
import UseReduce from "./components/usereducer/UseReduce";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { RandomNumber } from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";
import CustomButton from "./components/html/Button";

function App() {
  const [value, setValue] = useState<any>("");
  const PropsFunction = () => {
    console.log("Hi");
  };

  const dataObj = {
    first: "Jaycon Jude",
    last: "Madrid",
  };

  const ArrayData = [
    { Name: "Jaycon", LastName: "Madrid" },
    { Name: "Juross", LastName: "Madrid" },
    { Name: "Clint", LastName: "Madrid" },
    { Name: "Clint", LastName: "Madrid" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    console.log(e);
    console.log(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const click = (item: any) => {
    console.log(item);
  };

  return (
    <div className="App">
      {/* <AllTypesProps
        status="Loading"
        ArrayData={ArrayData}
        dataObj={dataObj}
        PropsFunction={PropsFunction}
      />
      <EventProps
        handleClick={handleClick}
        Description="This is an event Props"
        value={value}
        handleChange={handleChange}
      />
      <AdvancedProps>
        <Children />
      </AdvancedProps>
      <StyleProps styles={{ border: "1px solid black", padding: "1rem" }} />

      <h2>Hooks </h2>
      <IsLoggedIn />
      <UseReduce />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <MutableRef />
      <Private isLoggedIn={true} Component={Profile} />
      <List
        items={[
          { id: 1, first: "Bruce", last: "wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, firs1111111111111111111t: "Princess", last: "Diana" },
        ]}
        onClick={click}
      />
      <RandomNumber value={10} isNegative />

      <Toast position="center" /> */}
      <CustomButton variant="primary" onClick={() => console.log("Click")}>
        Click
      </CustomButton>
    </div>
  );
}

export default App;
