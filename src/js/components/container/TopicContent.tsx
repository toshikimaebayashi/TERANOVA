import React from 'react';

class TopicContent extends React.Component {

 render() {
    return (
      <div className="MainContainer-tab" id="topic_content">
        <h2 className="headline">TOPIC</h2>
        <div className="MainContainer-topic common">
          <div className="topic-event">
            <div className="topic-event__day">2018.08.01</div>
            <div className="topic-event__details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="topic-event">
            <div className="topic-event__day">2018.08.01</div>
            <div className="topic-event__details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="topic-event">
            <div className="topic-event__day">2018.08.01</div>
            <div className="topic-event__details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
        </div>
        <div className="MainContainer-about common">
          <h2 className="headline">「謎解きイベント」とは？</h2>
          <div className="explanation">
            <p>謎解きイベントとは、参加者が実際に物語 の世界に入り込み数々の謎を解き明かすこと でストーリーを進める体験型のイベントです。 株式会社TERRA NOVAでは、 物語体験をテーマに特に世界観やストーリー 性を重視したイベントを制作しています。 長編のストーリーを軸にしたシリーズ作品の 「リビルド -再構築- 」を代表作に、 教育向けコンテンツなどの受注制作も行っています。</p>
          </div>
        </div>
        <div className="MainContainer-works">
          <h2 className="headline">製作実績</h2>
          <div className="works-list horizontal_scroll_wrap">
            <ul className="scroll_lst">
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicContent;