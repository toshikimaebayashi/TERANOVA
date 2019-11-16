import React from 'react';

class Request_content extends React.Component {

 render() {
    return (

       <div className="MainContainer-tab" id="request_content">
         <div className="MainContainer-about">
           <p className="title">「謎解きイベント」とは？</p>
           <p>謎解きイベントとは、参加者が実際に物語の世 界に入り込み数々の謎を解き明かすことでストー リーを進める体験型のイベントです。 多様なテーマやメッセージを取り込んだコンテンツ を制作することができるため、様々な 企業や団体の広報・集客や研修などに 利用されています。</p>
         </div>
         <div className="MainContainer-howtouse explanation">
           <ul className="list">
             <li className="list__item">
               <h3 className="list__item__title">広報プロモーションに</h3>
               <p>謎解きの市場規模は200億円を超えるといわれてい ます。商品プロモーションや地方創生とかけ合わせて 謎解きファンを集めるプロモーションイベントが人気です。</p>
             </li>
             <li className="list__item">
               <h3 className="list__item__title">会社説明会に</h3>
               <p>謎解きイベントのなかで参加者は能動的に情報を集め、 理解しようとします。このプロセスに「伝えたいこと」を 交えることで効率よく企業を知ってもらうことができます。</p>
             </li>
             <li className="list__item">
               <h3 className="list__item__title">研修・採用活動に</h3>
               <p>知的遊戯である謎解きの中では、実に多くの能力が必 要とされます。論理的思考能力やチームマネジメント能 力など、人事領域で重要とされる能力を効率よく見 定め、育てることができる手法として注目されています。</p>
             </li>
           </ul>
         </div>
       </div>

    );
  }
}

export default Request_content;