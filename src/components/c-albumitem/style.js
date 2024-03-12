import styled from "styled-components";
import bgicon from "@/assets/img/coverall.png";
const AlbumitemWrap = styled.div`
  width: 118px;
  height: 147px;
  .album-top {
    position: relative;
    height: 100px;
    .albumimg {
      width: 100px;
      height: 100px;
      background-color: orange;
      position: absolute;
      background: url(${(props) => props.$bgimg}) no-repeat;
      background-size: 100px 100px;
    }
    .albummode {
      width: 118px;
      height: 100px;
      position: absolute;
      z-index: 99;
      background: url(${bgicon}) no-repeat 0 -570px;
    }
  }

  .albumbottom {
    font-size: 12px;
    color: #333;
    margin-top: 5px;
    .artname {
      color: #666;
    }
  }
`;

export { AlbumitemWrap };
