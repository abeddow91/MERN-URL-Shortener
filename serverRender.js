import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from 'axios';

import App from './src/components/App';

const serverRender = () =>
axios.get(`${config.serverUrl}/api/urls`)
.then(resp => {
  ReactDOMServer.renderToString(
    <App initialUrls={resp.data.urls}/>
  );
});

export default serverRender;
