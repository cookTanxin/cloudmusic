import styled from "styled-components";

const SingerWrap = styled.div`
  padding: 6px 8px;
  .title-area {
    margin-top: 22px;
  }
  .singer-list {
    margin-top: 20px;
    .singer-item {
      margin-bottom: 20px;
    }
  }
  /*//开始状态*/
  .alert-enter,
  .alert-appear {
    opacity: 0;
    transform: translateX(100%);
  }
  /*//开始执行动画*/
  .alert-enter-active,
  .alert-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 600ms, transform 600ms;
  }
`;

export { SingerWrap };
