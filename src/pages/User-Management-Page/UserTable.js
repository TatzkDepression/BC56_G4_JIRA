import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import { useDispatch } from "react-redux";
import { getAllProjectThunk } from "../../redux/thunk/projectThunk";
import { useSelector } from "react-redux";

const UserTable = ({ userList }) => {
    const { user } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const data = [user].map((item) => {
        return { text: item.name, value: item.name };
    });

    let headColumns = [
        {
            title: "User Id",
            dataIndex: "userId",
            key: "userId",
            sorter: (item2, item1) => {
                return item2.userId - item1.userId;
            },
            sortDirections: ["descend"],
        },
        {
            title: "Project name",
            dataIndex: "name",
            key: "name",
            filterSearch: true,
            filteredValue: filteredInfo.name || null,
            filters: [user].map((item) => {
                return { text: item.name, value: item.name };
            }),
            onFilter: (value, record) => record.name.startsWith(value),
            render: (text) => {
                return <span style={{ color: "blue" }}>{text}</span>;
            },
            sorter: (item2, item1) => {
                let name1 = item1.name?.trim().toLowerCase();
                let name2 = item2.name?.trim().toLowerCase();
                if (name2 < name1) {
                    return -1;
                }
                return 1;
            },
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
        },
    ];

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                }}
            >
                <h6 style={{ fontSize: 50 }}>User Management</h6>
                <Space style={{ margin: 16 }}>
                    <Button onClick={clearFilters}>Clear filters</Button>
                    <Button onClick={clearAll}>Clear filters and sorters</Button>
                </Space>
            </div>
            <Table rowKey={Math.random} columns={headColumns} dataSource={userList} onChange={handleChange} />
        </div >
    );
};

export default UserTable;
