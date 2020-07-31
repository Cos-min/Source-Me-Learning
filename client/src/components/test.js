import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/api/test" });
function Test() {
  api.get("/").then(res => {
    console.log(res.data);
  });

  return <div>neculai</div>;
}

export default Test;
