import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/page-not-found.svg";

const ErrorPage = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${Background}) `,
        }}
      >
        <h1>Trang bạn truy cập không tồn tại </h1>
        <Link to={"/projects"} className="btn">
          Nhấn để về trang chủ Jira
        </Link>
        <p className="copyRights">© 2023 Jira Clone</p>
      </div>
    </>
  );
};

export default ErrorPage;
