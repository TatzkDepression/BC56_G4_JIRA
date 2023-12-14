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
import { openNotification } from "../../components/notification/notification";

export default function UserAction({
    user,
    onSuccess,
}) {
    let handleDeleteUser = () => {
        USER_SERVICE.deleteUser(user.userId)
            .then((res) => {
                openNotification("success", "Delete user successfully!");
                onSuccess();
            })
            .catch((err) => {
                openNotification("error", err.response.data.message);
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
                <EditFilled style={{ color: "blue", fontSize: 20, marginRight: 10 }} />
            </button>
            <Modal
                title="Update User Information"
                open={isModalOpen}
                onCancel={handleCancel}
            >
                <UserEdit user={user} onSuccess={onSuccess} />
            </Modal>

            <Popconfirm
                title={
                    <span className="text-sm">
                        Are you sure you want to delete this user?
                    </span>
                }
                onConfirm={handleDeleteUser}
                okText="Yes"
                cancelText="No"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
                <DeleteOutlined style={{ color: "red", fontSize: 20 }} />
            </Popconfirm>
        </div>
    );
}
