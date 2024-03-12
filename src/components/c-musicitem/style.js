import styled from "styled-components";
import bgimg from "@/assets/img/coverall.png";
import iconbg from "@/assets/img/iconall.png";
const MusicItemwrap = styled.div`
  width: 140px;
  cursor: pointer;
`;

const MusicItemTop = styled.div`
  width: 100%;
  height: 140px;
  background: url(${(props) => props.$bgimg}) no-repeat;
  background-size: 140px 140px;
  position: relative;
  .tranparent-shade {
    width: 140px;
    height: 140px;
    background: url(${bgimg}) no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .music-data {
    width: 100%;
    height: 27px;
    background: url(${bgimg}) no-repeat 0 -537px;
    position: absolute;
    bottom: 0;
    color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .music-left {
      display: flex;
      align-items: center;
      .iconbg {
        margin: 5px;
        display: block;
        width: 14px;
        height: 11px;
        background: url(${iconbg}) no-repeat 0 -24px;
      }
    }
    .music-right {
      display: flex;
      margin-right: 5px;
      .iconbg {
        display: block;
        width: 16px;
        height: 17px;
        background: url(${iconbg}) no-repeat 0 0px;
      }
    }
  }
`;

const MusicItemBottom = styled.div`
  width: 100%;
  margin-top: 14px;
  font-size: 13px;
`;

export { MusicItemwrap, MusicItemTop, MusicItemBottom };
