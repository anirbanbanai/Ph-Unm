import { Layout, Menu } from "antd";
import { SidebarItemsGenarator } from "../../utils/sideBarItems";
import { adminPath } from "../../route/admin.route";
import { facultyPaths } from "../../route/faculty.routes";
import { studentPaths } from "../../route/student.routes";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const SideBar = () => {
  const role = "admin";
  let sideBarItem;

  switch (role) {
    case userRole.ADMIN:
      sideBarItem = SidebarItemsGenarator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItem = SidebarItemsGenarator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItem = SidebarItemsGenarator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItem}
      />
    </Sider>
  );
};

export default SideBar;
