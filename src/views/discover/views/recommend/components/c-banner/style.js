import styled from "styled-components";
import bannerimg from "@/assets/img/banner_sprite.png";
import downloadimg from "@/assets/img/download.png";
export const CbannerWrap = styled.div`
  width: 100%;
  background-color: #fff;
  background: url(${(props) => props.$bannerBg}) no-repeat center/6000px;
  background-size: cover;
  position: relative;
  .banner-inner {
    position: relative;
    height: 280px;
    .carousel-item {
      img {
        display: block;
        height: 280px;
      }
    }
    .banner-area {
      display: flex;
      .carousel-content {
        width: 730px;
      }
      .download-area {
        width: 254px;
        background: url(${downloadimg}) 0 0 no-repeat;
      }
    }
  }
  .carousel-area {
    .left-arrow {
      width: 37px;
      height: 63px;
      position: absolute;
      z-index: 999;
      left: -70px;
      bottom: 100px;
      background: url(${bannerimg}) 0px -360px no-repeat;
      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        transition: all 0.3s;
      }
    }
    .right-arrow {
      width: 37px;
      height: 63px;
      position: absolute;
      right: -70px;
      z-index: 999;
      bottom: 100px;
      background: url(${bannerimg}) 0px -508px no-repeat;
      &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        transition: all 0.3s;
      }
    }
  }
`;
