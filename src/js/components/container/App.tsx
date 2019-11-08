import React, { Component } from 'react';
import { render } from 'react-dom';
import  { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Topic_content from "./Topic_content";
import Lecture_content from "./Lecture_content";
import Question_content from "./Question_content";
import Request_content from "./Request_content";

export default class App extends Component {
  
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>TOPIC</Tab>
          <Tab>講演一覧</Tab>
          <Tab>製作依頼</Tab>
          <Tab>お問い合わせ</Tab>
        </TabList>

        <TabPanel>
          <Topic_content />
        </TabPanel>
        <TabPanel>
          <Lecture_content />
        </TabPanel>
        <TabPanel>
          <Request_content />
        </TabPanel>
        <TabPanel>
          <Question_content />
        </TabPanel>

      </Tabs>
    );
  }
}

render(<App/>, document.getElementById('root'));
