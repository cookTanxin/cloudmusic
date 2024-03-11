// react
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
// redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// actionCrator
import { getBanner } from "../../store/actionCreators";
// antd
import { Carousel } from "antd";
// style
import { CbannerWrap } from "./style";

const Cbanner = memo(() => {
  // hook
  // 当前选中项
  const [current, setCurrent] = useState(0);
  // ref
  const carouselRef = useRef();
  // 获取store值
  const { banners } = useSelector((state) => {
    return {
      banners: state.recommend.banners,
    };
  }, shallowEqual);
  // hook
  const dispatch = useDispatch();
  // hook
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  // 切换走马灯以后
  const changeBanner = useCallback((from, to) => {
    setCurrent(to);
  }, []);
  // 根据下标值 切换背景图片
  const bannerBg =
    banners &&
    banners[current] &&
    banners[current].imageUrl + "?imageView&blur=40x20";
  return (
    <CbannerWrap $bannerBg={bannerBg}>
      <div className="banner-inner wrap-v2">
        <div className="banner-area">
          <div className="carousel-content">
            <Carousel
              effect="fade"
              autoplay
              ref={carouselRef}
              beforeChange={changeBanner}
              autoplaySpeed={3000}
            >
              {banners.map((item, index) => {
                return (
                  <div className="carousel-item" key={item.targetId}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>

          {/* 下载按钮 */}
          <div className="download-area">1</div>
        </div>

        {/* 箭头部分 */}
        <div className="carousel-area">
          <div
            className="left-arrow"
            onClick={(e) => carouselRef.current.prev()}
          ></div>
          <div
            className="right-arrow"
            onClick={(e) => carouselRef.current.next()}
          ></div>
        </div>
      </div>
    </CbannerWrap>
  );
});

export default Cbanner;
