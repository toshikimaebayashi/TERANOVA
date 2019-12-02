import React from "react";

/**
 * AppのBottomコンポーネント
 */
class Bottom extends React.Component {
  render() {
    return (
      <div className="bottom">
        <div className="bottom-container">
          <a className="bottomBtn">制作依頼</a>
        </div>
        <div className="bottom-container">
          <a className="bottomBtn">お問い合わせ</a>
        </div>
      </div>
    );
  }
}

export default Bottom;
