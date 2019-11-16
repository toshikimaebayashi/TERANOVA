import React, { Component } from 'react';
import { render } from 'react-dom';
import  { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Topic_content from "./Topic_content";
import Lecture_content from "./Lecture_content";
import Question_content from "./Question_content";
import Request_content from "./Request_content";

export default class App extends Component {

  render() {
    const List = [
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
