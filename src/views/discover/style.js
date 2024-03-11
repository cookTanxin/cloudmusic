import styled from "styled-components";

const DiscoverWrap = styled.div``;

// menu 样式类
const TopMenu = styled.div`
  width: 100%;
  background-color: #b2281e;
  height: 35px;
  .innercontent {
    display: flex;
    align-items: center;
    margin-left: 125px;
    .children-nav {
      width: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      margin-top: -2px;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 12px;
        &:hover {
          background-color: #9b0909;
          color: #fff;
          padding: 3px 10px;
          border-radius: 30px;
        }
        &.active {
          background-color: #9b0909;
          color: #fff;
          padding: 3px 10px;
          border-radius: 30px;
        }
      }
    }
  }
`;

export { DiscoverWrap, TopMenu };
