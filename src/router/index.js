import { useRoutes, Navigate } from "react-router-dom";

// 页面组件
import Cdiscover from "@/views/discover";
// 子页面
// 推荐页面
import Recommend from "../views/discover/views/recommend";
// 排行榜
import Toplist from "../views/discover/views/toplist";
// 歌单
import Playlist from "../views/discover/views/playlist";
// 主播电台
import Djradio from "../views/discover/views/djradio";
// 歌手
import Artst from "../views/discover/views/artist";
// 专辑
import Album from "../views/discover/views/album";
// 歌曲
import Song from "../views/song";

// 一级路由
import Cmine from "@/views/mine";
import Cfriend from "@/views/friend";

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover/recommend" replace={true} />,
  },
  {
    path: "/discover",
    element: <Cdiscover />,
    children: [
      {
        path: "",
        element: <Navigate to="/discover/recommend" replace={true}></Navigate>,
        index: true,
      },
      {
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "toplist",
        element: <Toplist />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
      {
        path: "djradio",
        element: <Djradio />,
      },
      {
        path: "artst",
        element: <Artst />,
      },
      {
        path: "album",
        element: <Album />,
      },
      {
        path: "song/:id",
        element: <Song></Song>,
      },
    ],
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
