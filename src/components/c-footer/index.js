import React, { memo } from "react";
// style
import { AppFooter } from "./style";
// local data
import { footerTopLinks, footerLinks } from "@/services/local-data";
const index = memo(() => {
  // 设置footer top 区域数据
  const setFooterTopitem = (item, index) => {
    return (
      <div className="footer-top-item" key={item.title}>
        <div
          className="footer-item-img"
          style={{
            backgroundPositionX: item.imgposition.x,
            backgroundPositionY: item.imgposition.y,
          }}
        ></div>
        <div className="footer-top-item-text">{item.title}</div>
      </div>
    );
  };
  return (
    <AppFooter>
      <div className="wrap-v2 innerfooter">
        <div className="footer-top">{footerTopLinks.map(setFooterTopitem)}</div>
        <div className="footer-bottom">
          {/* 服务条款 */}
          <div className="service-list">
            {footerLinks.map((item, index) => {
              return (
                <div className="service-list-item" key={item.title}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                  {!(footerLinks.length === index + 1) && <span>|</span>}
                </div>
              );
            })}
          </div>
          {/* 其他信息 */}
          <div className="footer-other-info">
            <p>
              廉正举报 不良信息举报邮箱: 51jubao@service.netease.com
              客服热线：95163298
            </p>
            <p>
              互联网宗教信息服务许可证：浙（2022）0000120
              增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18
              工业和信息化部备案管理系统网站
            </p>
            <p>
              网易公司版权所有©1997-2024杭州乐读科技有限公司运营：浙网文[2021]
              1186-054号 浙公网安备 33010802013307号
            </p>
          </div>
        </div>
      </div>
    </AppFooter>
  );
});

export default index;
