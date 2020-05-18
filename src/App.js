import React, {Component} from 'react';
import './App.css'
import TaskForm from './component/taskform.js'
import Control from './component/control.js'
import AddWorks from './component/addwork.js'
import TaskList from './component/tasklist.js'
class App extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
            tasks :[{

            }]
            ,
            isDisplay: true
      };
    }
    componentWillMount = () =>
    {
        if(localStorage && localStorage.getItem('tasks'))
        {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }
    onGenerateData = () =>
    {
        var tasks = [
        {
            id: this.GenerateID(),
            name : "Hoc choi game",
            status : true
        },
            {
            id: this.GenerateID(),
            name : "Di ia",
            status : true
        },
        {
            id: this.GenerateID(),
            name : "Di hoc",
            status : true
        }]

        this.setState(
            {
                tasks : tasks
            }
        );
        localStorage.setItem('tasks' , JSON.stringify(tasks));
        
    }

    s4(){
        return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
    }
    GenerateID()
    {
        return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() ;
    }

    onChangeDisplay = (param) =>{
        this.setState({
            isDisplay: param
        })
    }
  render() {

    var {tasks, isDisplay} = this.state;
    var eleTaskForm = isDisplay === true ? <TaskForm display ={isDisplay} 
                                            onReceiveDisplay = {this.onChangeDisplay}/>:'';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
        <div className={isDisplay? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "0"}>
            {eleTaskForm}
          </div>
          <div className={isDisplay? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <AddWorks display = {isDisplay} onReceiveDisplay = {this.onChangeDisplay}/>
            <button type="button" className="btn btn-danger mt-15 ml-15" 
            onClick = {this.onGenerateData}
            >
                <span className="fa fa-plus mr-5" />Generate data
            </button>
            <div className="row mt-15">
                <Control />
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App
