import { Table } from "antd";

const ProjectManagement = () => {
  const column = [
    {
      title: "Project ID",
      dataIndex: "id",
      key: "id",
      sorter: (item2, item1) => {
        return item2.id - item1.id;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Project name",
      dataIndex: "projectName",
      key: "projectName",
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
      sorter: (item2, item1) => {
        let categoryName1 = item1.categoryName?.trim().toLowerCase();
        let categoryName2 = item2.categoryName?.trim().toLowerCase();
        if (categoryName2 < categoryName1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Creator",
      key: "creator",
      sorter: (item2, item1) => {
        let creator1 = item1.creator?.name.trim().toLowerCase();
        let creator2 = item2.creator?.name.trim().toLowerCase();
        if (creator2 < creator1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Members",
      key: "members",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "id",
    },
  ];

  return (
    <div>
      <div>
        <h6 className="mb-3">Project Management</h6>
      </div>
      <Table
        pagination={{ showSizeChanger: false, pageSize: 6 }}
        columns={column}
        size="large"
        rowKey={"id"}
      />
    </div>
  );
};

export default ProjectManagement;
