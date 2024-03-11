import styled from "styled-components";
import indeximg from "@/assets/img/index.png";
const CommonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c22e26;
  align-items: center;
  padding-bottom: 10px;
  .left-area {
    .left-title {
      display: flex;
      align-items: center;
      .bgicon {
        display: block;
        width: 33px;
        height: 33px;
        background: url(${indeximg}) no-repeat 0 9999px;
        background-position: -225px -156px;
      }
      p {
        font-size: 16px;
        color: #333;
        font-weight: bold;
        margin-left: 5px;
      }
      .recommend-list {
        display: flex;
        align-items: center;
        margin-left: 10px;
        color: #999;
        font-size: 12px;
        span {
          &:nth-child(2) {
            margin: 0 10px;
          }
        }
      }
    }
  }
  .right-area {
    cursor: pointer;
    display: flex;
    align-items: center;
    .bgicon {
      display: block;
      width: 12px;
      height: 12px;
      background: url(${indeximg}) no-repeat 0 -240px;
      margin-left: 5px;
    }
  }
`;

export { CommonWrap };
