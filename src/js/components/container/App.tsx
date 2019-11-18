import React, { Component } from 'react';
import { render } from 'react-dom';
import  { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TopicContent from "./TopicContent";
import LectureContent from "./LectureContent";
import QuestionContent from "./QuestionContent";
import RequestContent from "./RequestContent";
import BottomContent from "./BottomContent";

export default class App extends Component {

  render() {
    const list = [
      { Tabname : 'TOPIC' },
      { Tabname : '公演一覧' },
      { Tabname : '製作依頼' }, 
      { Tabname : 'お問い合わせ' },
    ];

    return (
      <Tabs 
        className = "tabs">
        <TabList
          className = "tabs__tab-list">
            {List.map((Item) => {
              return (
                <Tab
                  className = "tabs__tab"
                  selectedClassName ="tabs__tab--selected">{Item.Tabname}</Tab>
              );
            })}
        </TabList>

        <TabPanel>
          <TopicContent />
        </TabPanel>
        <TabPanel>
          <LectureContent />
        </TabPanel>
        <TabPanel>
          <RequestContent />
        </TabPanel>
        <TabPanel>
          <QuestionContent />
        </TabPanel>

        <BottomContent />
      </Tabs>
    );
  }
}

render(<App/>, document.getElementById('root'));
