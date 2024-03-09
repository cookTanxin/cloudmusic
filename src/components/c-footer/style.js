import styled from "styled-components";
import footertopimg from "@/assets/img/foot_enter_new2.png";
const AppFooter = styled.div`
  width: 100%;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  .innerfooter {
    padding: 20px 0;
  }
  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .footer-top-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      .footer-item-img {
        width: 45px;
        height: 45px;
        background-size: 220px 220px;
        background-repeat: no-repeat;
        background-image: url(${footertopimg});
      }
      .footer-top-item-text {
        margin-top: 14px;
      }
    }
  }
  .footer-bottom {
    .service-list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      .service-list-item {
        a {
          font-size: 12px;
        }
        span {
          color: #d9d9d9;
          margin: 0 8px 0 8px;
        }
      }
    }
    .footer-other-info {
      margin-top: 20px;
      text-align: center;
      line-height: 30px;
      color: #666;
    }
  }
`;

export { AppFooter };
