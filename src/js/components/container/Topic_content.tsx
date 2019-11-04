import React from 'react';

class Topic_content extends React.Component {
  
 render() {
    return (
      
       <div className="main-container-tab_content" id="topic_content">
        <h2>TOPIC</h2>
        <div className="topic common">
          <div className="event">
            <div className="day">2018.08.01</div>
            <div className="event-details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="event">
            <div className="day">2018.08.01</div>
            <div className="event-details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
          <div className="event">
            <div className="day">2018.08.01</div>
            <div className="event-details">リビルド特別公演 「ラブレター大捜査線」の 再演が8/24・25で決定!</div>
          </div>
        </div>
        <div className="about common">
          <h2>「謎解きイベント」とは？</h2>
          <div className="back">
            <p>謎解きイベントとは、参加者が実際に物語 の世界に入り込み数々の謎を解き明かすこと でストーリーを進める体験型のイベントです。 株式会社TERRA NOVAでは、 物語体験をテーマに特に世界観やストーリー 性を重視したイベントを制作しています。 長編のストーリーを軸にしたシリーズ作品の 「リビルド -再構築- 」を代表作に、 教育向けコンテンツなどの受注制作も行っています。</p>
          </div>
        </div>
        <div className="works">
          <h2>製作実績</h2>
          <div className="works-list horizontal_scroll_wrap">
            <ul className="scroll_lst">
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" className="alignnone size-medium wp-image-986" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" className="alignnone size-medium wp-image-986" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" className="alignnone size-medium wp-image-986" />
                  </div>
                </a>
              </li>
              <li className="scroll_item">
                <a href="" className="scroll_item_inr">
                  <div className="scroll_item_thum">
                    <img src="images/TERANOVA_work1.jpg" className="alignnone size-medium wp-image-986" />
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

export default Topic_content;