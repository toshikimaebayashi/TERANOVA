import React from 'react';

class Question_content extends React.Component {
  
 render() {
    return (
      
       <div className="main-container-tab_content contents" id="question_content">
        <form action="confirm.php" method="post" name="form">
          <h1 className="contact-title">お問い合わせ</h1>
          <div>
            <div className="form-content">
              <label>お名前</label>
              <input type="text" name="name" placeholder="例）山田太郎" value=""></input>
            </div>
            <div className="form-content">
              <label>メールアドレス</label>
              <input type="text" name="email" placeholder="例）guest@example.com" value=""></input>
            </div>
            <div className="form-content">
              <label>電話番号</label>
              <input type="text" name="tel" placeholder="例）0000000000" value=""></input>
            </div>
            <div className="form-content">
              <label>件名</label>
              <input type="text" name="tel" placeholder="例）0000000000" value=""></input>
            </div>
            <div className="form-content">
              <label>本文</label>
              <textarea name="content"  placeholder="お問合せ内容を入力"></textarea>
            </div>
          </div>
          <input type="image" src="images/submit.png" alt="送信する" className="submit"></input>
        </form>
      </div>
    );
  }
}

export default Question_content;