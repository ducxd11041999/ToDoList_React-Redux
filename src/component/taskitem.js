import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as action from './../action/index.js'
class TaskItem extends Component {
  onUpdateStatus = () =>
  {
      this.props.onUpdateStatus(this.props.task.id);
  }
  onRemoveTask = () => 
  {
      this.props.onDeleteTask(this.props.task.id);
      this.props.closeForm();
  }
  onEditData = () =>
  {
      this.props.onEditTask(this.props.task);
      this.props.openForm();
  }
  render() {
    var {task , index} = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
        <span className = {task.status === true ?"label label-success" : "label label-danger"}
            onClick = {this.onUpdateStatus}
        >
        {task.status === true ? "Kich hoạt":"Ẩn"}
        </span>
      </td>
      <td className="text-center">
          <button type="button" className="btn btn-warning" onClick ={this.onEditData}>
            <span className="fa fa-pencil mr-5" />Sửa
          </button>
            &nbsp;
          <button type="button" className="btn btn-danger" onClick = {this.onRemoveTask}>
            <span className="fa fa-trash mr-5" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) =>{
    return ({}
    )
}

const mapDispatchToProps = (dispatch, props) =>{
    return ({
        onUpdateStatus : (id) =>
        {
            dispatch(action.updateStatus(id))
        },
        onDeleteTask : (id) =>{
            dispatch(action.deleteTask(id))
        },  
        closeForm : () =>{
          dispatch(action.closeForm())
        },
        onToggleForm : () =>
        {
            dispatch(action.toggleForm())
        },
        openForm : () =>{
          dispatch(action.openForm())
        },
        onEditTask : (task) =>{
          dispatch(action.editTask(task));
        }

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
