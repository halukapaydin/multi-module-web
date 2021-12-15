import React from 'react';
import {CommonComponent1} from 'module-common';
import {Module1Component} from 'module-1';
import {Module2Component} from 'module-2';
import 'module-common/dist/index.css';

export default ()=>{
    return <div>
        Hello World
        <CommonComponent1 />
        <br/>
        <Module1Component />
        <br/>
        <Module2Component />
    </div>
}