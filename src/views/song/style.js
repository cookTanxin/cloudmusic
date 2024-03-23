import styled from "styled-components";
import iconimg from "@/assets/img/icon.png";
import playbuttonimg from "@/assets/img/button2.png";
const SongWrap = styled.div`
  background-color: #fff;
  padding: 50px;
  box-sizing: border-box;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  display: flex;
  .left-content {
    width: 260px;
    margin-right: 20px;
    height: 260px;
    padding: 5px;
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .right-content {
    .song-title {
      display: flex;
      align-items: center;
      .icon {
        width: 54px;
        height: 24px;
        display: block;
        background: url(${iconimg}) no-repeat 0 -243px;
      }
      p {
        font-size: 20px;
        margin-left: 20px;
      }
    }
    .play-button {
      width: 66px;
      height: 31px;
      margin-top: 20px;
      /* background: linear-gradient(#5991d6, #3a72bb); */
      background: url(${playbuttonimg}) repeat-x -5px -1653px;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .icon {
        display: inline-block;
        width: 20px;
        height: 18px;
        background: url(${playbuttonimg}) no-repeat 0 -1622px;
      }
      span {
        color: #fff;
        margin-left: 2px;
      }
    }
  }
`;

export { SongWrap };
