// react
import React, { memo } from "react";
// react-router
import { NavLink, useNavigate } from "react-router-dom";
// antd
import { SearchOutlined } from "@ant-design/icons";
// 本地数据
import { headerLinks } from "@/services/local-data.js";
// 样式
import { AppHeader, StyledInput } from "./style";
const index = memo((props) => {
  // 路由导航
  const navigate = useNavigate();
  // 循环navlink函数
  const setNavLink = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} key={item.title}>
          {item.title}
          <i className="nav-arrow"></i>
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.link}
          key={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      );
    }
  };
  // 点击logo 回到首页
  const goHomepage = () => {
    navigate("/");
  };
  return (
    <AppHeader>
      <div className="wrap-v1 headerinner">
        <div className="logo-area" onClick={goHomepage}>
          <a href="/"> </a>
        </div>
        <div className="nav-area">{headerLinks.map(setNavLink)}</div>
        <div className="login-area">
          <StyledInput
            prefix={<SearchOutlined style={{ fontSize: "15px" }} />}
            placeholder="音乐/视频/电台/用户"
          ></StyledInput>
          <div className="createbtn">创作者中心</div>
          <div className="login-text">登录</div>
        </div>
      </div>
      {/* 底部选中项 */}
      <div className="hearder-active">
        {/* 红色线条 */}
        <div className="header-active-line"></div>
      </div>
    </AppHeader>
  );
});

export default index;
