import styled from "styled-components";
import logoimg from "@/assets/img/sprite_01.png";
// antd;
import { Input } from "antd";
// header 样式
const AppHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #242424;
  .headerinner {
    display: flex;
    align-items: center;
  }
  .logo-area {
    display: inline-block;
    width: 160px;
    height: 70px;
    background: url(${logoimg});
    cursor: pointer;
  }
  .nav-area {
    font-size: 14px;
    display: flex;
    height: 70px;
    margin-left: 20px;
    a {
      padding: 0 24px;
      text-decoration: none;
      color: #ccc;
      display: block;
      height: 100%;
      line-height: 70px;
      &:hover {
        background-color: #000000;
        transition: all 0.3s;
      }
      &.active {
        background-color: #000000;
        color: #fff;
      }
    }
  }
  .login-area {
    display: flex;
    align-items: center;
    .createbtn {
      color: #fff;
      border-radius: 30px;
      border: 1px solid #4e4e4e;
      padding: 5px 10px;
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    .login-text {
      color: #797979;
      font-size: 13px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// 自定义input 样式
const StyledInput = styled(Input)`
  width: 150px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-size: 12px;
`;
export { AppHeader, StyledInput };
