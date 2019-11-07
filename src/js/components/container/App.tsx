import React, { Component } from 'react';
import { render } from 'react-dom';
import  { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class App extends Component {
  
  
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>

        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>

      </Tabs>
    );
  }
}

render(<App/>, document.getElementById('root'));
