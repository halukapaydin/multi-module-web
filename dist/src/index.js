import React from 'react';
import ReactDOM from 'react-dom';
import {CommonComponent} from 'module-common';
// import 'antd/dist/antd.css';
// import {Module1Component} from 'module-1';
// import {Module2Component} from 'module-2';

ReactDOM.render(
	<div>
		<CommonComponent />
		{/*<Module1Component/>*/}
		{/*<Module2Component/>*/}
	</div>,
	// <div>Hello</div>,
	document.getElementById('root')
);