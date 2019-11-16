import React from 'react';

class BottomContent extends React.Component {
  
 render() {
    return (
      <div>
       <div className="bottom-btn">
         <div className="btn-container float-left">
           <a className="act-button">制作依頼</a>
         </div>
         <div className="btn-container float-right">
           <a className="act-button">お問い合わせ</a>
         </div>
        </div>
      </div>
      
    );
  }
}

export default BottomContent;