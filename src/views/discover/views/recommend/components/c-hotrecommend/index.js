import React, { memo, useRef, useEffect } from "react";
// redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// reducer
import { getHotRecommend } from "../../store/actionCreators";
// style
import { HotrecommendWrap } from "./style";
// andt
import { Spin } from "antd";
// components
import Commontitle from "@/components/c-commontitle";
import Cmusicitem from "@/components/c-musicitem";
const HotRecommend = memo(() => {
  // react-redux
  const dispath = useDispatch();
  const { hotrecommenddata } = useSelector(
    (state) => ({
      hotrecommenddata: state.recommend.hotRecommend,
    }),
    shallowEqual
  );
  // hook
  const commRef = useRef();
  // 查看更多 子传递父方法
  const gopage = (data) => {
    console.log("跳转页面");
    commRef.current.look();
  };
  // hook
  useEffect(() => {
    dispath(getHotRecommend());
  }, [dispath]);
  return (
    <HotrecommendWrap>
      <div className="hot-header">
        <Commontitle
          ref={commRef}
          title="网抑云推荐"
          goMore={gopage}
          rlist={["华语", "流行", "摇滚", "民谣", "电子"]}
        ></Commontitle>
      </div>
      <>
        {hotrecommenddata.length <= 0 && (
          <div className="hot-loading">
            <Spin />
          </div>
        )}
      </>
      <div className="hot-content">
        {hotrecommenddata.map((item, index) => {
          return (
            <div className="item">
              <Cmusicitem key={item.id} item={item}></Cmusicitem>
            </div>
          );
        })}
      </div>
    </HotrecommendWrap>
  );
});

export default HotRecommend;
