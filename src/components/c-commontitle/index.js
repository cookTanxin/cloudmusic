import React, { memo } from "react";
// style
import { CommonWrap } from "./style";
// 属性校验
import PropTypes from "prop-types";
const Commontitle = memo((props) => {
  const { title, rlist } = props;
  // 跳转更多
  const goMore = () => {
    console.log("first");
  };
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
      <div className="right-area" onClick={(e) => goMore()}>
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
export default Commontitle;
