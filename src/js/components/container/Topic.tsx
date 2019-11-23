import React from 'react';

class Topic extends React.Component {

 render() {
    return (
      <div className="container">
        <h2 className="container-headline">TOPIC</h2>
        <div className="topic common">
          <div className="news">
            <div className="news-day">2018.08.01</div>
            <div className="news-detail">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="news">
            <div className="news-day">2018.08.01</div>
            <div className="news-detail">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="news">
            <div className="news-day">2018.08.01</div>
            <div className="news-detail">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
        </div>
        <h2 className="container-headline">「謎解きイベント」とは？</h2>
        <div className="about common">
          <div className="explanation">
            <p>謎解きイベントとは、参加者が実際に物語 の世界に入り込み数々の謎を解き明かすこと でストーリーを進める体験型のイベントです。 株式会社TERRA NOVAでは、 物語体験をテーマに特に世界観やストーリー 性を重視したイベントを制作しています。 長編のストーリーを軸にしたシリーズ作品の 「リビルド -再構築- 」を代表作に、 教育向けコンテンツなどの受注制作も行っています。</p>
          </div>
        </div>
        <h2 className="container-headline">製作実績</h2>
        <div className="works">
          <ul className="scroll">
            <li className="scroll-item">
              <a href="">
                <img src="images/topic/img_scroll01.jpg" />
              </a>
            </li>
            <li className="scroll-item">
              <a href="">
                <img src="images/topic/img_scroll01.jpg" />
              </a>
            </li>
            <li className="scroll-item">
              <a href="">
                <img src="images/topic/img_scroll01.jpg" />
              </a>
            </li>
            <li className="scroll-item">
              <a href="">
                <img src="images/topic/img_scroll01.jpg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Topic;