import React from 'react';

class Question extends React.Component {

 render() {
    return (

       <div className="container">
         <h2 className="container-headline">お問い合わせ</h2>
         <form method="post" name="form" className="form">
           <div className="list">
             <div className="list-item">
               <label>お名前</label>
               <input type="text" name="name"></input>
             </div>
             <div className="list-item">
               <label>メールアドレス</label>
               <input type="text" name="email"></input>
             </div>
             <div className="list-item">
               <label>電話番号</label>
               <input type="text" name="tel"></input>
             </div>
             <div className="list-item">
               <label>件名</label>
               <input type="text" name="tel" className="input"></input>
             </div>
             <div className="list-item">
               <label>本文</label>
               <textarea name="content"></textarea>
             </div>
           </div>
           <input type="image" src="images/qustion/btn_submit.png" alt="送信する" className="form-submit"></input>
        </form>
      </div>
    );
  }
}

export default Question;