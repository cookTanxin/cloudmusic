import styled from "styled-components";

const SingerItemWrap = styled.div`
  display: flex;
  .left-img {
    width: 80px;
    height: 80px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .right-content {
    cursor: pointer;
    height: 80px;
    flex: 1;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #f5f5f5;
    .singer-title {
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export { SingerItemWrap };
