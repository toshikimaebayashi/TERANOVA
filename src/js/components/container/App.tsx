import React, { Component } from "react";
import { render } from "react-dom";
import TopContainer from "./App/TopContainer";
import Bottom from "./App/Bottom";

/**
 * プロジェクトのルートコンポーネント
 */
export default class App extends Component {
  public render() {

    return (
      <div className="app">
        <TopContainer />
        <Bottom />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
