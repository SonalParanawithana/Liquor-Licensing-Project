import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
// eslint-disable-next-line
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { FaBox } from "react-icons/fa";
import { GiTalk } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
const { Sider, Content } = Layout;

const LicenseerMainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

      const employee = JSON.parse(localStorage.getItem("employee"));
      // if (!user) {
      //   navigate("/");
      // }

  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{background:"#252525"}}>
          <h2 className="text-white fs-5 text-center py-3 mb-0 ">

            <span className="lg-logo"> Your Dashboard</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          style={{ background: "#090909",  height:"100vh"}}

          items={[
            
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "apply-license",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Apply for License",
            },

            
            {
              key: "enquiries",
              icon: <GiTalk  className="fs-4" />,
              label: "Enquiries",
            },

          

            {
              key: "reports",
              icon: <TbReportMoney  className="fs-4" />,
              label: "Analytical Reports",
              children:[
                {
                  key: "sales-report",
                  icon: <FaClipboardList className="fs-4" />,
                  label: "Sales Report",
                },
                {
                  key: "inventory-report",
                  icon: <FaClipboardList className="fs-4" />,
                  label: "Inventory Report",
                },
              ]
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
      
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LicenseerMainLayout;