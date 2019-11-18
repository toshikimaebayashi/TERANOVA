import React from 'react';

class Lecture extends React.Component {

 render() {
    return (

      <div className="MainContainer-tab Lecture-content">
        <div className="MainContainer-lecture-list">
          <h2 className="headline">公演一覧</h2>
          <div className="self-production">
            <h3 className="self-production-title">自社制作</h3>
            <ul className="slider">
              <li className="slider-content">
                <div className="slider-content-image">
                  <figure className="image"><img src="images/TERANOVA_work1.jpg"></img></figure>
                </div>
                <div className="slider-content-detail">
                  <p className="slider-content-detail__status">開催中</p>
                  <p className="slider-content-detail__category">体験型謎解きRPG「リビルド – 再構築– 」シリーズ1</p>
                  <p className="slider-content-detail__title">序章:エニグマからの挑戦状</p>
                  <p className="slider-content-detail__info">開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店) 〒167-0023 東京都杉並区上井草1-9-21</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="self-production">
            <h3 className="self-production-title">受託制作</h3>
            <ul className="slider">
              <li className="slider-content">
                <div className="slider-content-image">
                  <figure className="image"><img src="images/TERANOVA_work1.jpg"></img></figure>
                </div>
                <div className="slider-content-detail">
                  <p className="slider-content-detail__status">開催中</p>
                  <p className="slider-content-detail__category">体験型謎解きRPG「リビルド – 再構築– 」シリーズ1</p>
                  <p className="slider-content-detail__title">序章:エニグマからの挑戦状</p>
                  <p className="slider-content-detail__info">開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店) 〒167-0023 東京都杉並区上井草1-9-21</p>
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