import React from "react";


import "./MainDash.css";
import Cards from "../../Cards/Cards";
import Table from "../../Table/Table";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <Cards />
      <Table />
     
    </div>
  );
};

export default MainDash;