import React, { memo } from "react";

// 样式
import { AppHeader } from "./style";

import { NavLink } from "react-router-dom";

const index = memo(() => {
  return (
    <AppHeader>
      <div>页头部分</div>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/mine">我的</NavLink>
    </AppHeader>
  );
});

export default index;
