import React from 'react';

class Bottom extends React.Component {

 render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <a className="footer-btn">制作依頼</a>
        </div>
        <div className="footer-container">
          <a className="footer-btn">お問い合わせ</a>
        </div>
      </div>
    );
  }
}

export default Bottom;