import React, { memo } from "react";
// react-router
import { Outlet, NavLink } from "react-router-dom";
// style
import { DiscoverWrap, TopMenu } from "./style";

// 菜单导航数据
import { dicoverMenu } from "@/services/local-data.js";

const index = memo(() => {
  return (
    <DiscoverWrap>
      <div className="recommend-content">
        {/* 顶层菜单 */}
        <TopMenu>
          <div className="wrap-v2">
            <div className="innercontent ">
              {dicoverMenu.map((item, index) => {
                return (
                  <div className="children-nav" key={index}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </TopMenu>
        {/* 子路由渲染位置 */}
        <Outlet></Outlet>
      </div>
    </DiscoverWrap>
  );
});

export default index;
