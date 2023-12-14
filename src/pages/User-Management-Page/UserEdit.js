import React from "react";
import { Button, Form, Input } from "antd";
import {
    LockOutlined,
    MailOutlined,
    MobileOutlined,
    IdcardOutlined,
} from "@ant-design/icons";
import USER_SERVICE from "../../services/userService";
import Label from "../../components/form/Label";
import { openNotification } from "../../components/notification/notification";

const UserEdit = ({ user, onSuccess }) => {
    const onFinish = (value) => {
        let userEdit = { ...value, id: user.userId };
        USER_SERVICE.editUser(userEdit)
            .then((res) => {
                openNotification("success", "Update user successfully!");
                onSuccess();
            })
            .catch((err) => {
                openNotification("error", err.response.data.message);
            });
    };

    const labelItem = (labelText) => (
        <Label className="font-medium">{labelText}</Label>
    );

    return (
        <Form
            name="registerForm"
            className="register-form w-full"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            initialValues={{
                email: `${user.email}`,
                name: `${user.name}`,
                passWord: `${user.passWord}`,
                confirmPassword: `${user.passWord}`,
                phoneNumber: `${user.phoneNumber}`,
            }}
        >
            <Form.Item
                name="email"
                label={labelItem("Email")}
                rules={[
                    {
                        required: true,
                        message: "Please do not leave ${name} empty",
                    },
                    {
                        type: "email",
                        message: "Please input correct email format for ${name}",
                    },
                ]}
            >
                <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Johndoe@email.com"
                />
            </Form.Item>

            <Form.Item
                name="name"
                label={labelItem("User name")}
                rules={[
                    {
                        required: true,
                        message: "Please do not leave ${name} empty",
                    },
                ]}
            >
                <Input prefix={<IdcardOutlined />} placeholder="John Doe" />
            </Form.Item>

            <Form.Item
                name="passWord"
                label={labelItem("Passwords")}
                rules={[
                    { required: true, message: "Please do not leave ${name} empty" },
                    {
                        min: 6,
                        message: "Please input password has length greater than 5",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Enter your passwords"
                />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                label={labelItem("Confirm Passwords")}
                dependencies={["passWord"]}
                rules={[
                    {
                        required: true,
                        message: "Please do not leave ${name} empty",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("passWord") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("Password and Confirm password must be the SAME")
                            );
                        },
                    }),
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Enter the confirmation passwords"
                />
            </Form.Item>

            <Form.Item
                name="phoneNumber"
                label={labelItem("Phone Number")}
                rules={[
                    {
                        required: true,
                        message: "Please do not leave ${name} empty",
                    },
                    {
                        pattern: /^(?:\d*)$/,
                        message: "${name} only accepts number. Please input again",
                    },
                ]}
            >
                <Input prefix={<MobileOutlined />} placeholder="0897831245" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Update User
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserEdit;
