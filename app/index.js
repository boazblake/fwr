import React from 'react';
import { render } from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const HelloWorld = () => (
  <div>
  <h2>Another App made with Feathers, React, and Webpack </h2>
  <img src="./favicon.ico"/>
  <img width="100px"  src="https://facebook.github.io/react/img/logo.svg"/>
  <img width="200px" src="https://cdn-images-1.medium.com/max/1422/1*A-_KrEvMuiH7dlwshFw5aw.png"/>
  </div>

);

render(<HelloWorld />, document.querySelector('#app'));
