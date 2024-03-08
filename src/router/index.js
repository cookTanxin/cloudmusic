import { useRoutes } from "react-router-dom";

// 页面组件
import Cdiscover from "@/views/discover";
import Cmine from "@/views/mine";

const routes = [
  {
    path: "/",
    element: <Cdiscover />,
    exact: true,
  },
  {
    path: "/mine",
    element: <Cmine />,
  },
];

function RouterConfig() {
  const routeElements = useRoutes(routes);

  return routeElements;
}

export default RouterConfig;
