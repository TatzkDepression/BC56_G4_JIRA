import React, { memo } from "react";
import Menu from "../../components/menu/Menu";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = ({ Component }) => {
  return (
    <>
      <Sidebar />
      <Menu />
      <div className="content">
        <Component />
      </div>
    </>
  );
};

export default memo(Dashboard);
