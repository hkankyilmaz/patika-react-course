import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [contact, setContact] = React.useState({ name: "", phoneNumber: "" });
  const [search, setSearch] = React.useState("");
  const [list, setList] = React.useState([
    { name: "Hakan KARAYILMAZ", number: "05515599872" },
    { name: "Mehmet ÖZTÜRK", number: "05512338291" },
    { name: "Osman KARADAĞ", number: "05515539999" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, contact]);
  };

  return (
    <div className="App">
      <h2>Contact App</h2>
      <label htmlFor="search">Rehberde Ara</label>
      <input id="search" onChange={(e) => setSearch(e.target.value)} />
      <List list={list} search={search} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          type="text"
          required
          id="name"
        />
        <label htmlFor="number">Phone Number</label>
        <input
          onChange={(e) =>
            setContact({ ...contact, phoneNumber: e.target.value })
          }
          type="number"
          required
          id="number"
        />
        <button type="submit">KAYDET</button>
      </form>
    </div>
  );
}

export default App;
