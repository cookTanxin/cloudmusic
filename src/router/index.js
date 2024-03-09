import { useRoutes, Navigate } from "react-router-dom";

// 页面组件
import Cdiscover from "@/views/discover";
import Cmine from "@/views/mine";
import Cfriend from "@/views/friend";

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" replace={true} />,
  },
  {
    path: "/discover",
    element: <Cdiscover />,
  },
  {
    path: "/mine",
    element: <Cmine />,
  },
  {
    path: "/friend",
    element: <Cfriend />,
  },
];

function RouterConfig() {
  const routeElements = useRoutes(routes);

  return routeElements;
}

export default RouterConfig;
