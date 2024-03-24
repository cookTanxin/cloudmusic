// react
import React, { memo } from "react";
// style
import { Recommendwrap } from "./style";
// banner 组件
import Cbanner from "./components/c-banner";
// hotcommend 组件
import HotRecommend from "./components/c-hotrecommend";
// 新专辑组件
import Newalbum from "./components/c-newalbum";
// 歌手组件
import Singer from "./components/c-singer";
// 排行榜
import Ranking from "./components/c-ranking";
const Recommend = memo(() => {
  return (
    <Recommendwrap>
      {/* banner 区域 */}
      <div className="banner-area">
        <Cbanner></Cbanner>
      </div>
      {/* 内容区域 */}
      <div className="recommend-content wrap-v2">
        <div className="innerrecommend">
          <div className="recommend-left">
            {/* 推荐区块 */}
            <HotRecommend></HotRecommend>
            {/* 新专辑  */}
            <Newalbum></Newalbum>
            {/* 排行榜 */}
            <Ranking></Ranking>
          </div>
          <div className="recommend-right">
            <Singer></Singer>
          </div>
        </div>
      </div>
    </Recommendwrap>
  );
});

export default Recommend;
