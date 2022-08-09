import React from "react";

interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of item</h2>
      {items.map((item: any, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.id} {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};

export default List;
