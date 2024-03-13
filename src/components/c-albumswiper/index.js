import React, { memo, useEffect, useRef, useState } from "react";
// propsType
import PropTypes from "prop-types";
// style
import { NewalumbWarp } from "./style";
// component
import AlbumItem from "../c-albumitem";
const Albumswipwer = memo(({ albums, auto, duration }) => {
  // 盒子宽度
  const albumWidht = 630;
  // 声明一个变量保存 计时器id
  let timerRef = useRef();
  // album 页数
  const [count, setcount] = useState(0);
  // hook
  useEffect(() => {
    if (auto) {
      timerRef.current = setInterval(() => {
        if (count < albums.length / 5) {
          setcount(count + 1);
        }
        if (count >= albums.length / 5) {
          setcount(0);
        }
      }, duration);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [auto, albums.length, count, duration]);

  // 点击左边
  const clickLeft = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  // 点击右边
  const clickRight = () => {
    if (count < albums.length / 5) {
      setcount(count + 1);
    }
  };
  return (
    <NewalumbWarp>
      <div className="inner-content">
        <div className="lfet-arrow" onClick={clickLeft}></div>
        <div className="middle-content">
          <div
            className="inner-list"
            style={{
              width: count * (albums.length / 5) + "px",
              transform: `translateX(${-(count * albumWidht)}px)`,
            }}
          >
            {albums.map((item, index) => {
              return (
                <div className="album-item" key={index}>
                  <AlbumItem album={item}></AlbumItem>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-arrow" onClick={clickRight}></div>
      </div>
    </NewalumbWarp>
  );
});

Albumswipwer.propTypes = {
  // 数据
  albums: PropTypes.array.isRequired,
  // 是否自动轮播
  auto: PropTypes.bool,
  // 轮播时间
  duration: PropTypes.number,
};

Albumswipwer.defaultProps = {
  albums: [],
  auto: false,
  duration: 3000,
};

export default Albumswipwer;
