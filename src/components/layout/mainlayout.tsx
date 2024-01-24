import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";


const { Content, Footer, Header, Sider } = Layout;

const items : MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    
  },
  {
    key: "User Management",
    label: "User Management",
    children:[
      {
        key:"create-admin",
        label:<NavLink to="/admin/create-admin">Create Admin</NavLink>
      },
      {
        key:"create-Student",
        label:<NavLink to="/admin/create-student">Create Student</NavLink>
      },
      {
        key:"create-Faculty",
        label:<NavLink to="/admin/create-faculty">Create Facuty</NavLink>
      },
    ]
  }
]
const Mainlayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div  >

          <h1 style={{color: "white", textAlign:"center"}}>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;