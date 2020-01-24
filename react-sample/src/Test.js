import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Test extends Component {
    render(){

    //return <h1 style={{color:"red", backgroundColor:"blue",fontFamily:"verdana", fontSize:"30px;"}}>Hello World!</h1>;
    return <div style={{backgroundColor:"lightblue",marginBottom:"40px"}}>
                <h1>Sample Application</h1><br/>
                <center><div style={{marginBottom:"20px"}}> <input type="text"/> </div> </center>
           </div>;
    }
}

ReactDOM.render(<Test/>, document.getElementById('root'));
export default Test;