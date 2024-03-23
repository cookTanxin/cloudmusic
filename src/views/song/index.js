import React, { memo } from "react";
import { SongWrap } from "./style";
// react -router
import {} from "react-router-dom";
const Song = memo(() => {
  return (
    <SongWrap className="wrap-v2">
      <div className="left-content">
        <div className="music-img">
          <img
            src="https://p1.music.126.net/YbHNtaeJXs2F5palNFyLvg==/109951169389487541.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right-content">
        <div className="song-title">
          <i className="icon"></i>
          <p>歌曲名称</p>
        </div>
        {/* 播放按钮 */}
        <div className="play-button">
          <i className="icon"></i>
          <span>播放</span>
        </div>
        {/* 标签区域 */}
      </div>
    </SongWrap>
  );
});

export default Song;
