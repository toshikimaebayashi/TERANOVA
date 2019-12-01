import React from "react";

/**
 * TopContainerのLectureコンポーネント
 */
class Lecture extends React.Component {
  render() {
    return (
      <div className="lecture">
        <h2 className="headline">公演一覧</h2>
        <div className="lecture-container">
          <div className="product-list">
            <h3 className="productTitle">自社制作</h3>
            <ul className="slider-list">
              <li className="product-container">
                <figure className="image">
                  <img src="images/lecture/img01.jpg"></img>
                </figure>
                <div className="product-detail">
                  <p className="productStatus">開催中</p>
                  <p className="productCategory">
                    体験型謎解きRPG「リビルド – 再構築– 」シリーズ1
                  </p>
                  <p className="productTitle">序章:エニグマからの挑戦状</p>
                  <p className="productInfo">
                    開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店)
                    〒167-0023 東京都杉並区上井草1-9-21
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="product-list">
            <h3 className="productTitle">受託制作</h3>
            <ul className="slider-list">
              <li className="product-container">
                <figure className="image">
                  <img src="images/lecture/img01.jpg"></img>
                </figure>
                <div className="product-detail">
                  <p className="productStatus">開催中</p>
                  <p className="productCategory">
                    体験型謎解きRPG「リビルド – 再構築– 」シリーズ1
                  </p>
                  <p className="productTitle">序章:エニグマからの挑戦状</p>
                  <p className="productInfo">
                    開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店)
                    〒167-0023 東京都杉並区上井草1-9-21
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Lecture;
