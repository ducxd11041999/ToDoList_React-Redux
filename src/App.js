import React, {Component} from 'react';
import './App.css'
import TaskForm from './component/taskform.js'
import Control from './component/control.js'
import AddWorks from './component/addwork.js'
import TaskList from './component/tasklist.js'
import {connect} from 'react-redux'
import * as action from './action/index.js'
//import demo from './trainning/demo.js'
class App extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
            filter: {
                name:'',
                status: -1
            },
            keyWord: '',
            sort: {
                by: '',
                value: 1
            }
      };
    }
   
    onChangeDisplay = (param) =>{
        this.props.onToggleForm();
    }
    
    onFilter = (fName, fStatus) =>
    {
            //console.log(fName + " " + fStatus)
            fStatus = parseInt(fStatus, 10);
            this.setState(
            {
                filter:{
                    name: fName,
                    status: fStatus
                }
            })
            
    }

    onSearch = (param) =>{
       this.setState({
            keyWord : param
       })
    }

    onSort = (param) =>{
        //console.log(param)
        this.setState(
        {
            sort:{
                by: param.sort.by,
                value: param.sort.value
            }
        },()=>{
             console.log(this.state.sort)
        })
     
    }
  render() {
    /*var {
        filter, 
        keyWord,
        sort} = this.state;*/

    var {isDisplay} = this.props;
    //console.log(isDisplay)
    /*
    if(filter)
    {
        if(filter.name)
        {
            filter.name = filter.name.toLowerCase();
            tasks = tasks.filter((task) =>{
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }
        tasks = tasks.filter((task) =>{
                if(filter.status === -1)
                {
                    return task;
                }else{
                    return task.status === (filter.status === 1? true:false)
                }
            });

    }

    if(keyWord)
    {
        tasks = tasks.filter((task) =>{
            return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1; 
        })
    }

    if(sort.by ==='name')
    {
        tasks.sort((a, b)=>{
            if(a.name > b.name)
                return sort.value;
            else if(a.name < b.name)
                return -sort.value
            else return 0;
        });
    }else{
        tasks.sort((a, b)=>{
            if(a.status > b.status)
                return sort.value;
            else if(a.status < b.status)
                return -sort.value
            else return 0;
        });
    }
    */
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
            <div className={isDisplay? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "0"}>
                <TaskForm />
            </div>
          <div className={isDisplay? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <div>
                    <AddWorks />
                </div>
            <div className="row mt-15">
                <Control 
                onSearch = {this.onSearch}
                onSort = {this.onSort}
                />
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList 
                onEditData =  {this.onEditData}
                onFilter = {this.onFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return (
       {
            isDisplay : state.isDisplayForm,
            tasks : state.tasks
       } 
    )
}

const mapDispatchToProps = (dispatch, props) =>{
    return ({
        onToggleForm : () =>
        {
            dispatch(action.toggleForm())
        },
        onCloseForm : () =>
        {
            dispatch(action.closeForm())
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
