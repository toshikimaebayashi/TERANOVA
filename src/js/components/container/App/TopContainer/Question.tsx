import React from "react";

/**
 * TopContainerのQuestionコンポーネント
 */
class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <h2 className="headline">お問い合わせ</h2>
        <form method="post" name="form" className="form-container">
          <div className="form-list">
            <div className="form-item">
              <label>お名前</label>
              <input type="text" name="name"></input>
            </div>
            <div className="form-item">
              <label>メールアドレス</label>
              <input type="text" name="email"></input>
            </div>
            <div className="form-item">
              <label>電話番号</label>
              <input type="text" name="tel"></input>
            </div>
            <div className="form-item">
              <label>件名</label>
              <input type="text" name="tel" className="input"></input>
            </div>
            <div className="form-item">
              <label>本文</label>
              <textarea name="content"></textarea>
            </div>
          </div>
          <input
            type="image"
            src="images/qustion/btn_submit.png"
            alt="送信する"
            className="formSubmit"
          ></input>
        </form>
      </div>
    );
  }
}

export default Question;
