import React from 'react';
import ReactDOM from 'react-dom';
import {CommonComponent1} from 'module-common';
import {Module1Component} from 'module-1';
import {Module2Component} from 'module-2';
// import {CommonComponent2} from 'module-common-2';

export default ()=>{
    return <div>
        Hello World
        <CommonComponent1 />
        <br/>
        <Module1Component />
        <br/>
        <Module2Component />
        {/*<CommonComponent2 />*/}
    </div>
}