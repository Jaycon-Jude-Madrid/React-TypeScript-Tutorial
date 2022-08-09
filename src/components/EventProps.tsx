import React from "react";

interface EventHandlerProps {
  Description: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventProps = ({
  handleClick,
  Description,
  value,
  handleChange,
}: EventHandlerProps) => {
  const Id = Math.random().toString(16);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>{Description}</h4>
      <button
        style={{ width: "150px", textAlign: "center" }}
        onClick={(e) => handleClick(e, Id)}
      >
        Click
      </button>
      <input onChange={handleChange} value={value || " "} />
    </div>
  );
};

export default EventProps;
