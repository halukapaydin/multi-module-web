import React, {useState} from 'react';
import {Button} from 'antd';

export default () => {
	let [value, setValue] = React.useState(0);
	return <div>
		<div>value : {value}</div>
		<Button onClick={()=>{setValue(++value)}}>Hello Common Button</Button>
	</div>
}

