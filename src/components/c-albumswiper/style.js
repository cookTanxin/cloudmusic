import styled from "styled-components";
import iconbg from "@/assets/img/sprite_02.png";
const NewalumbWarp = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #d6d6d6;
  padding: 20px 10px;
  .inner-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lfet-arrow {
    width: 17px;
    height: 17px;
    background-color: orange;
    cursor: pointer;
    background: url(${iconbg}) no-repeat -260px -75px;
  }
  .right-arrow {
    width: 17px;
    height: 17px;
    cursor: pointer;
    background: url(${iconbg}) no-repeat -300px -75px;
  }
  .middle-content {
    display: flex;
    flex-wrap: nowrap;
    width: 630px;
    overflow-x: hidden;
    .inner-list {
      padding-left: 18px;
      display: flex;
      flex-wrap: nowrap;
      transition: transform 300ms;
      .album-item {
        margin-right: 40px;
      }
    }
  }
`;

export { NewalumbWarp };
