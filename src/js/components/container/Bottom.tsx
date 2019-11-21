import React from 'react';

class Bottom extends React.Component {

 render() {
    return (
      <footer>
        <div className="btn-container">
          <a className="act-button">制作依頼</a>
        </div>
        <div className="btn-container">
          <a className="act-button">お問い合わせ</a>
        </div>
      </footer>
    );
  }
}

export default Bottom;