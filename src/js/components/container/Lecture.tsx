import React from 'react';

class Lecture extends React.Component {

 render() {
    return (

      <div className="container">
        <h2 className="container-headline">公演一覧</h2>
        <div className="lecture">
          <div className="production">
            <h3 className="production-title">自社制作</h3>
            <ul className="sliderlist">
              <li className="slider">
                <figure className="image"><img src="images/lecture/img01.jpg"></img></figure>
                <div className="detail">
                  <p className="detail-status">開催中</p>
                  <p className="detail-category">体験型謎解きRPG「リビルド – 再構築– 」シリーズ1</p>
                  <p className="detail-title">序章:エニグマからの挑戦状</p>
                  <p className="detail-info">開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店) 〒167-0023 東京都杉並区上井草1-9-21</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="production">
            <h3 className="production-title">受託制作</h3>
            <ul className="sliderlist">
              <li className="slider">
                <figure className="image"><img src="images/lecture/img01.jpg"></img></figure>
                <div className="detail">
                  <p className="detail-status">開催中</p>
                  <p className="detail-category">体験型謎解きRPG「リビルド – 再構築– 」シリーズ1</p>
                  <p className="detail-title">序章:エニグマからの挑戦状</p>
                  <p className="detail-info">開催日程:2017年10月~現在 開催場所:常設店舗(荻窪店) 〒167-0023 東京都杉並区上井草1-9-21</p>
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