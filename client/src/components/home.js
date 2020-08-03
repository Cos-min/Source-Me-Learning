import React, { useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/api/home" });

function HomePage() {
  useEffect(() => {
    api.get("/").then(res => {
      res.json("/");
    });
  }, []);
  return (
    <div>
      <button type="submit" name="submit">
        Submit
      </button>
    </div>
  );
}

export default HomePage;
