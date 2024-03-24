import React, { memo } from "react";
// components
import Commontitle from "@/components/c-commontitle";
// style
import { RankingWrap } from "./style";
const Ranking = memo(() => {
  return (
    <RankingWrap>
      <div className="ranking-head">
        <Commontitle title="榜单"></Commontitle>
      </div>
    </RankingWrap>
  );
});

export default Ranking;
