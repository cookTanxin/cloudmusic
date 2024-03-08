// 路由模式
import { BrowserRouter } from "react-router-dom";
// component
import AppHeader from "@/components/c-header";
import AppFooter from "@/components/c-footer";
// 路由配置
import RouterConfig from "./router";
function App() {
  return (
    <BrowserRouter>
      <AppHeader></AppHeader>
      {/* react-router 路由渲染位置 */}
      <RouterConfig></RouterConfig>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
}

export default App;
