import React from "react";
import { NavLink } from "react-router-dom";

const Usermenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Usermenu;
