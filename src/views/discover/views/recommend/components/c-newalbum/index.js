import React, { memo, useEffect } from "react";
// react-redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// action
import { getNewalbum } from "../../store/actionCreators";
// style
import { NewalbumWrap } from "./style";
// component
import Commontitle from "@/components/c-commontitle";
import Albumswipwer from "@/components/c-albumswiper";
// andt
import { Spin } from "antd";
const Newalbum = memo(() => {
  // react-redux
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    shallowEqual
  );
  // hook
  useEffect(() => {
    dispatch(getNewalbum());
  }, [dispatch]);
  // 跳转更多
  const gopage = () => {
    console.log("跳转更多");
  };

  return (
    <NewalbumWrap>
      <>
        {newAlbum.length <= 0 ? (
          <div className="loading-area">
            <Spin />
          </div>
        ) : (
          <>
            <div className="commontitle">
              <Commontitle title="新碟上架" goMore={gopage}></Commontitle>
            </div>
            <div className="newalbum-content">
              <Albumswipwer albums={newAlbum} auto={true}></Albumswipwer>
            </div>
          </>
        )}
      </>
    </NewalbumWrap>
  );
});

export default Newalbum;
