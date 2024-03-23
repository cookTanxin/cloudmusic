import React, { memo, useEffect } from "react";
// 通用标题组件
import Commontitle from "@/components/c-commontitle";
// 歌手组件
import Singeritem from "@/components/c-singeritem";
// style
import { SingerWrap } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// action
import { getHotSiner } from "../../store/actionCreators";
// 导入动画
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Singer = memo(() => {
  // dispath
  const dispatch = useDispatch();
  // hook;
  useEffect(() => {
    dispatch(getHotSiner());
  }, [dispatch]);
  const { hotSinger } = useSelector((state) => {
    return {
      hotSinger: state.recommend.hotSinger,
    };
  }, shallowEqual);
  console.log(hotSinger);
  return (
    <SingerWrap>
      <div className="title-area">
        <Commontitle title="歌手列表" showPointimg={false}></Commontitle>
      </div>
      <div className="singer-list">
        {
          <TransitionGroup>
            {hotSinger.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={index * 300}
                  classNames="alert"
                >
                  <div className="singer-item">
                    <Singeritem item={item}></Singeritem>
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        }
      </div>
    </SingerWrap>
  );
});

export default Singer;
