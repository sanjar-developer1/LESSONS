import { useMemo, useState } from "react";
import "./App.css";

const data = [
  { id: 1, name: "movie 1" },
  { id: 2, name: "movie 2" },
  { id: 3, name: "movie 3" },
  { id: 4, name: "movie 4" },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((i) => {
      return i.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  // useMemo

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <input type="text" placeholder="zerikish" />
      <ul>
        {filteredData.map((i, index) => {
          return <li key={index}>{i.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
