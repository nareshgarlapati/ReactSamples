import React,{Component} from 'react';
import FirstChild from './FirstChild';

class Parent extends Component {

    render(){
        return (<h1>Parent Component
            <FirstChild text={"Child1"}/>
            <FirstChild text={"Child2"}/>
            <FirstChild text={"Child3"}/>
        </h1>);
    }

}

export default Parent;