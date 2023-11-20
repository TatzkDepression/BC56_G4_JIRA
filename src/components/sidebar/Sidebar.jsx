import React, { memo } from "react";
import { FaJira, FaQuestionCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/userSlice";
import { Link } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to={"/projects"}>
          <FaJira />
        </Link>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__item" onClick={() => dispatch(logout())}>
          <MdOutlineLogout className="sidebar__item-icon" />
          <span className="title">LOGOUT</span>
        </div>
        <div className="sidebar__item">
          <FaQuestionCircle className="sidebar__item-icon" />
          <span className="title">ABOUT</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);
