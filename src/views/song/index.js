import React, { memo } from "react";
import { SongWrap } from "./style";
import { Tag } from "antd";
// react -router
import { useParams } from "react-router-dom";
const Song = memo(() => {
  const params = useParams();
  console.log(params);
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
        <div className="tag-area">
          <span>标签</span>
          <div className="tag-list">
            <Tag className="tagitem">欧美</Tag>
          </div>
        </div>
        {/* 歌词部分 */}
        <div className="song-word">
          <ul>
            <li>歌词部分</li>
          </ul>
        </div>
      </div>
    </SongWrap>
  );
});

export default Song;
