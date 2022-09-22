import React from "react";
import "./style.css";

function List({ list, search }) {
  const filtered =
    search == ""
      ? list
      : list.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        });
  console.log(search, filtered);
  return (
    <div className="list-cont">
      {filtered.map((item, idx) => (
        <p key={idx}> {item.name} </p>
      ))}
    </div>
  );
}

export default List;
