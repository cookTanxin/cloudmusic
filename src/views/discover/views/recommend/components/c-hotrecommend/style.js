import styled from "styled-components";

const HotrecommendWrap = styled.div`
  width: 100%;
  .hot-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
    .item {
      margin-right: 40px;
      margin-bottom: 40px;
      &:nth-child(4) {
        margin-right: 0;
      }
      &:nth-child(8) {
        margin-right: 0;
      }
    }
  }
  .hot-loading {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 60px auto 60px auto;
  }
`;

export { HotrecommendWrap };
