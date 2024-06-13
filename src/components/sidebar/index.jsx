import React from "react";
import { Link } from "react-router-dom";
import sidebar_items from "../../Assets/JsonData/sidebar_routes.json";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const roleType = useSelector(
    (state) => state.auth.user?.role?.name || state.auth.user?.data?.role?.name
  );

  const valid = roleType === "admin" || roleType === "hr" ? true : false;

  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Interview System</div>
      <Divider variant="middle" sx={{ mb: 2 }} />

      <Link to="/interview-result">
        <SidebarItem
          title="Interview Result"
          icon="bx bx-table"
          active={0 === activeItem}
        />
      </Link>

      {valid && (
        <Link to="/users-list">
          <SidebarItem
            title="Users"
            icon="bx bxs-user"
            active={1 === activeItem}
          />
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
