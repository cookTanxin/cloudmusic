import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// component
import AppHeader from "@/components/c-header";
import AppFooter from "@/components/c-footer";
// 路由配置
import RouterConfig from "./router";

// 切换路由回到顶部
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <ScrollToTop></ScrollToTop>
      {/* react-router 路由渲染位置 */}
      <div className="app-content-container">
        <RouterConfig></RouterConfig>
      </div>
      <AppFooter></AppFooter>
    </>
  );
}

export default App;
