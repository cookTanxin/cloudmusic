import React, { memo, forwardRef, useImperativeHandle } from "react";
// style
import { CommonWrap } from "./style";
// 属性校验
import PropTypes from "prop-types";

const Commontitle = forwardRef((props, ref) => {
  const { title, rlist } = props;
  // 跳转更多
  const userClick = () => {
    props.goMore();
  };
  // 自定义访问导入方法 父组件通过ref 调用 子组件内部的方法
  const lookList = () => {
    console.log("通过ref 调用了");
    console.log(rlist);
  };
  // 暴露给父组件的实例和方法 和属性
  useImperativeHandle(ref, () => ({
    look: lookList,
    list: rlist,
  }));
  return (
    <CommonWrap>
      <div className="left-area">
        <div className="left-title">
          <i className="bgicon"></i>
          <p>{title}</p>
          {/* 推荐列表 */}
          {rlist.length > 0 && (
            <div className="recommend-list">
              {rlist.map((item, index) => {
                return (
                  <div className="recommend-list-item" key={item}>
                    <span>{item}</span>
                    {!(rlist.length === index + 1) && <span>|</span>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="right-area" onClick={(e) => userClick()}>
        <span>更多</span>
        <i className="bgicon"></i>
      </div>
    </CommonWrap>
  );
});

// 请制作传递属性校验类型
Commontitle.propTypes = {
  title: PropTypes.string.isRequired,
  rlist: PropTypes.array,
};

// 可以设置默认值
Commontitle.defaultProps = {
  title: "腾讯推荐",
  rlist: [],
};
export default memo(Commontitle);
