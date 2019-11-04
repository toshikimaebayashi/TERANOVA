import * as React from 'react';
import Tab_content from "./Tab_content";
import Tab from "./Tab";
import Topic_content from "./Topic_content";
import Lecture_content from "./Lecture_content";
import Question_content from "./Question_content";
import Request_content from "./Request_content";
import Bottom_content from "./Bottom_content";

 export default class CounterContainer extends React.Component {

  render() {
    return (
       <div>
        <div className="main-container">
        <div className="main-container-tabs">
          <Tab/>
          <Topic_content />
          <Lecture_content />
          <Request_content />
          <Question_content />
          <Bottom_content />
        </div>
      </div>
      </div>
    )
  }
}

