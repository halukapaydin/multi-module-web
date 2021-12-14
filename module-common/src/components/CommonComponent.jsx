import React, {useState} from 'react';

export default () => {
	// let value = 0;
	let _useState = React.useState(0);
	const [value, setValue] = _useState;
    return <div>
    	<div>value : {value}</div>
		<button onClick={()=>{setValue(++value)}}>Hello Common Button</button>
    }
    </div>
}