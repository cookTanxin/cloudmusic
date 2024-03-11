import React, { memo } from "react";
// style
import { HotrecommendWrap } from "./style";
// components
import Commontitle from "@/components/c-commontitle";
const HotRecommend = memo(() => {
  return (
    <HotrecommendWrap>
      <div className="hot-header">
        <Commontitle
          title="网抑云推荐"
          rlist={["华语", "流行", "摇滚", "民谣", "电子"]}
        ></Commontitle>
      </div>
    </HotrecommendWrap>
  );
});

export default HotRecommend;
