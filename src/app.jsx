import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { buildHello, HelloService } from 'src/HelloWorld/hello';

const Hello = buildHello({helloService: new HelloService()});
ReactDOM.render(<Hello name={"World"} />, document.getElementById('hello-world'));
