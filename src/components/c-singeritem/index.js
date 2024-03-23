import React, { memo } from "react";
// style
import { SingerItemWrap } from "./style";
const SingerItem = memo((props) => {
  const { item = {} } = props;
  return (
    <SingerItemWrap>
      <div className="left-img">
        <img src={item.picUrl} alt="" />
      </div>
      <div className="right-content">
        <div className="singer-title">{item.name}</div>
        <div className="singer-desc">{item.song.transName}</div>
      </div>
    </SingerItemWrap>
  );
});

export default SingerItem;
