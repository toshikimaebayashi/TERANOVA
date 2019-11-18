import React, { Component } from 'react';
import { render } from 'react-dom';
import  { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Topic from "./Topic";
import Lecture from "./Lecture";
import Question from "./Question";
import Request from "./Request";
import Bottom from "./Bottom";

export default class App extends Component {

  render() {
    const lists = ['TOPIC','公演一覧','製作依頼','お問い合わせ'];

    return (
      <Tabs 
        className = "tabs">
        <TabList
          className = "tabs__tab-list">
            {lists.map((Item) => {
              return (
                <Tab
                  className = "tabs__tab"
                  selectedClassName ="tabs__tab--selected">{Item}</Tab>
              );
            })}
        </TabList>

        <TabPanel>
          <Topic />
        </TabPanel>
        <TabPanel>
          <Lecture />
        </TabPanel>
        <TabPanel>
          <Request />
        </TabPanel>
        <TabPanel>
          <Question />
        </TabPanel>

        <Bottom />
      </Tabs>
    );
  }
}

render(<App/>, document.getElementById('root'));
