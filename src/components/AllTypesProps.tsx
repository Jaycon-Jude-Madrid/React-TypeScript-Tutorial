interface StatusProps {
  status: "Loading" | "Success" | "Error"; // We can specify the status of the props
  ArrayData: {
    [key: string]: any; // array props
  }[];

  dataObj: {
    [key: string]: any; // object props
  };
  PropsFunction: () => void; // function props
  messageCount?: number; // optional props
  TrueOrFalse?: boolean; //Boolean props
}

const Status = ({
  status,
  ArrayData,
  dataObj,
  PropsFunction,
  messageCount,
}: StatusProps) => {
  return (
    <div>
      <h1>{messageCount}</h1>
      <h4>This is an ArrayProps</h4>
      {ArrayData.map((item: any, index: any) => {
        return (
          <div key={index}>
            <h6>
              {item.Name} {item.LastName}
            </h6>
          </div>
        );
      })}
      <h4>This is an ObjectProps</h4>
      {dataObj.first} {dataObj.last}
      <h4>This is an Function props</h4>
      <button onClick={PropsFunction}> Click this shit</button>
      {status === "Loading" ? (
        <h2>Loading...</h2>
      ) : status === "Success" ? (
        <h2>Data fetched successfully</h2>
      ) : status === "Error" ? (
        <h2>Error fetching data </h2>
      ) : null}
    </div>
  );
};

export default Status;
