import React, { Component } from "react";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Top from "./TopContainer/Top";
import Lecture from "./TopContainer/Lecture";
import Question from "./TopContainer/Question";
import About from "./TopContainer/About";

/**
 * AppのTopContainerコンポーネント
 */
class TopContainer extends React.Component {
  public render() {
    const tabLists = ["TOPIC", "公演一覧", "製作依頼", "お問い合わせ"];
    const tabPanels = [<Top />, <Lecture />, <About />, <Question />];

    return (
      <div className="top-container">
        <Tabs className="tabs">
          <TabList className="tablist">
            {tabLists.map(item => {
              return (
                <Tab className="tab" selectedClassName="-selected">
                  {item}
                </Tab>
              );
            })}
          </TabList>

          {tabPanels.map(item => {
            return (
              <TabPanel className="tab-panel" selectedClassName="-selected">
                {item}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

export default TopContainer;
