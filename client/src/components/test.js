import React, { useState } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/api/test" });
function Test() {
  const [items, setItems] = useState([]);

  api.get("/").then(res => {
    setItems(res.data);
  });

  return (
    <div>
      {items.map(item => (
        <h1>{item._id}</h1>
      ))}
    </div>
  );
}

export default Test;
