import * as React from 'react';
import Topic_content from "./Topic_content";
import Lecture_content from "./Lecture_content";
import Question_content from "./Question_content";
import Request_content from "./Request_content";

 class Tab_content extends React.Component {
  render() {
    return (
       <div className="main-wrap">
          <Topic_content />
          <Lecture_content />
          <Request_content />
          <Question_content />
       </div>
    )
  }
}

export default Tab_content;