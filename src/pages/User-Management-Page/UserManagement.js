import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserAction from "./UserAction";
import USER_SERVICE from "../../services/userService";
import UserTable from "./UserTable";

export default function UserManagementPage() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let fetchUserList = () => {
            USER_SERVICE.getAllUser()
                .then((res) => {
                    let data = res.content.map((user) => {
                        return {
                            ...user,
                            action: <UserAction onSuccess={fetchUserList} user={user} />,
                        };
                    });
                    setUserList(data);
                    console.log("🚀  .then  setUserList:", setUserList)
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchUserList();
    }, []);

    return (
        <div className="container mx-auto pt-16">
            <UserTable userList={userList} />
        </div>
    );
}
