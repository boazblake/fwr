import React from 'react';
import { render } from 'react-dom';

const HelloWorld = () => (
  <div>App made with Feathers, React, and Webpack</div>
);

render(<HelloWorld />, document.getElementById('app'));
