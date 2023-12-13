import React, { useState } from "react";
import { Modal, Popconfirm } from "antd";
import USER_SERVICE from "../../services/userService";
import {
    DeleteOutlined,
    EditFilled,
    FormOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";
import UserEdit from "./UserEdit";
import toastify from "../../components/toastify/Toastify";

export default function UserAction({
    user,
    onSuccess,
}) {
    let handleDeleteUser = () => {
        USER_SERVICE.deleteUser(user.userId)
            .then((res) => {
                toastify("success", "Delete user successfully!");
                onSuccess();
            })
            .catch((err) => {
                toastify("error", err.response.data.message);
            });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="space-x-2">
            <button onClick={showModal}>
                <EditFilled className="text-blue-700 xl-2" />
            </button>
            <Modal
                title="Update user information"
                open={isModalOpen}
                onCancel={handleCancel}
                okText
            >
                <UserEdit user={user} onSuccess={onSuccess} />
            </Modal>

            <Popconfirm
                title={
                    <span className="text-lg pl-1">
                        Are you sure you want to delete this user?
                    </span>
                }
                onConfirm={handleDeleteUser}
                okText="Yes"
                cancelText="No"
                icon={<QuestionCircleOutlined className="top-1 text-red-500 text-xl" />}
            >
                <DeleteOutlined className="text-red-500 text-2xl" />
            </Popconfirm>
        </div>
    );
}
