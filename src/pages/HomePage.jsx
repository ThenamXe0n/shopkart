import React from "react";
import { Link } from "react-router-dom";
import { path } from "../routes/path";

const HomePage = () => {
  return (
    <>
      {" "}
      <div>HomePage</div>
     <Link to={path.SHOP}> <button>go to shop</button></Link>
    </>
  );
};

export default HomePage;
