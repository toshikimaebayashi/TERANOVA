import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./js/components/container/App";

const rootEl = document.getElementById('root')
rootEl ? ReactDOM.render(<App />, rootEl) : false;