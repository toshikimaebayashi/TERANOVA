import React from 'react';

class QuestionContent extends React.Component {

 render() {
    return (

       <div className="MainContainer-tab Question_content">
        <form method="post" name="form" className="contact-form">
          <h2 className="headline">お問い合わせ</h2>
          <div className="form-list">
            <div className="form-list__item">
              <label className="label">お名前</label>
              <input className="input" type="text" name="name"></input>
            </div>
            <div className="form-list__item">
              <label className="label">メールアドレス</label>
              <input className="input" type="text" name="email"></input>
            </div>
            <div className="form-list__item">
              <label className="label">電話番号</label>
              <input className="input" type="text" name="tel"></input>
            </div>
            <div className="form-list__item">
              <label className="label">件名</label>
              <input type="text" name="tel" className="input"></input>
            </div>
            <div className="form-list__item">
              <label className="label">本文</label>
              <textarea name="content" className="textarea"></textarea>
            </div>
          </div>
          <input type="image" src="images/submit.png" alt="送信する" className="form-submit"></input>
        </form>
      </div>
    );
  }
}

export default QuestionContent;