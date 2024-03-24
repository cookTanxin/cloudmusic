import React, { memo } from "react";
// react-router
import { useNavigate } from "react-router-dom";
// style
import { MusicItemwrap, MusicItemTop, MusicItemBottom } from "./style";
const Musicitem = memo((props) => {
  const { item } = props;
  // navigate
  const navigate = useNavigate();
  // 跳转到song 页面
  const goSonpage = () => {
    console.log(item);
    // navigate("/discover/song/10");
  };
  return (
    <MusicItemwrap onClick={goSonpage}>
      <MusicItemTop $bgimg={item.picUrl}>
        <div className="music-data">
          <div className="music-left">
            <i className="iconbg"></i>
            <span>{item.playCount}</span>
          </div>
          <div className="music-right">
            <i className="iconbg"></i>
          </div>
        </div>
        {/* 透明遮罩 */}
        <div className="tranparent-shade"></div>
      </MusicItemTop>
      <MusicItemBottom>
        <p className="ellipsis2">{item.name}</p>
      </MusicItemBottom>
    </MusicItemwrap>
  );
});

export default Musicitem;
