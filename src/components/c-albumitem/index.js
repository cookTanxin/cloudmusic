import React, { memo } from "react";
import PropTypes from "prop-types";
import { AlbumitemWrap } from "./style";
const Albumitem = memo((props) => {
  return (
    <AlbumitemWrap $bgimg={props.album.coverImgUrl}>
      <div className="album-top">
        <div className="albummode"></div>
        <div className="albumimg"></div>
      </div>

      <div className="albumbottom">
        <p className="albumtitle ellipsis">{props.album.name}</p>
        <span className="artname">{props.album.creator.nickname}</span>
      </div>
    </AlbumitemWrap>
  );
});

Albumitem.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Albumitem;
