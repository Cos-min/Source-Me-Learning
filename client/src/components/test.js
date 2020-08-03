import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/api/test" });
function Test() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/").then(res => {
      setItems(res.data);
    });
  }, []);

  console.log(items);
  return (
    <div>
      {items.map(item => (
        <h2 key={item.key}>{item.name}</h2>
      ))}
      <button type="submit" name="submit">
        Submit
      </button>
    </div>
  );
}

export default Test;
