import React from "react";
import icon from "../assets/img/search.svg";
import Table from "../components/Table";
const Transactions = () => {
  return (
    <div>
      <h1 className="transactions"> Transactions</h1>
      <div className="filters-container">
        <div className="sub-filters">
          <p className="reward-text">Show</p>
          <select className="dropdown">
            <option value="" disabled selected hidden>
              10
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <p className="reward-text">enteries</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search transaction" />
          <span className="search-icon">
            <img src={icon} />
          </span>
        </div>
      </div>
    <Table/>
    </div>
  );
};

export default Transactions;
