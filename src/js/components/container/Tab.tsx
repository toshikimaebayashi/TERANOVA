import React from 'react';

class Tab extends React.Component {
  
 render() {
    return (
      <>
          <input id="topic" type="radio" name="tab_item" className="tabcheck" defaultChecked></input>
          <label className="tab_item" htmlFor="topic">TOPIC</label>
          <input id="lecture" type="radio" name="tab_item" className="tabcheck"></input>
          <label className="tab_item" htmlFor="lecture" >講演一覧</label>
          <input id="request" type="radio" name="tab_item" className="tabcheck"></input>
          <label className="tab_item" htmlFor="request">製作依頼</label>
          <input id="question" type="radio" name="tab_item" className="tabcheck"></input>
          <label className="tab_item" htmlFor="question">お問い合わせ</label>
      </>
    );
  }
}

export default Tab;