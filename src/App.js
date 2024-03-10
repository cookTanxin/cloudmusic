// component
import AppHeader from "@/components/c-header";
import AppFooter from "@/components/c-footer";
// 路由配置
import RouterConfig from "./router";

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      {/* react-router 路由渲染位置 */}
      <div className="app-content-container">
        <RouterConfig></RouterConfig>
      </div>
      <AppFooter></AppFooter>
    </>
  );
}

export default App;
