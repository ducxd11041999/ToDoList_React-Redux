import React, {Component} from 'react';
import  {connect} from 'react-redux'
import * as action from './../action/index.js'

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    };
  }

  onCloseForm = () =>
  {
     this.props.closeForm();
  }

  onChange = (event) =>
  {
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState(
    {
      [name]:value
    })
  }

  onSave = (event) =>{
    event.preventDefault(); 
    //console.log(this.state.id)
    this.props.onSaveTask(this.state)
    this.onClear();
    this.onCloseForm();
  }

  onClear = () =>
  {
    this.setState({
      name:'',
      status: true
    })
  }

componentDidMount = () =>
  {
      if((this.props.taskEdit))
      {
        this.setState({
          id: this.props.taskEdit.id,
          name: this.props.taskEdit.name,
          status:this.props.taskEdit.status
        })
      }
      else
      {
          this.onClear();
      }
  }

UNSAFE_componentWillReceiveProps = (nextProps) =>
  {
      
      if(nextProps && (nextProps.taskEdit.id))
      {
        
        this.setState({
          id: nextProps.taskEdit.id,
          name: nextProps.taskEdit.name,
          status:nextProps.taskEdit.status
        });
      }
      else
      {
          this.onClear();
      }
  }
  render() {
    var id = this.props.taskEdit.id;
   // console.log(this.props.taskEdit)
    if(! this.props.isDisplay)  return null;
    else
    {
      return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">
                      {id !== ''? "Cập nhật công việc" : "Thêm công việc"}
                  <span className="fa fa-times-circle text-right ml-100 btn btn-warning text-right" 
                          onClick = {this.onCloseForm}
                  ></span>
                  </h3>
                </div>
                <div className="panel-body">
                  <form onSubmit = {this.onSave}>
                    <div className="form-group">
                      <label>Tên :
                          <input type = "text"
                            className="form-control"
                            name = 'name' 
                            value = {this.state.name}
                            onChange ={this.onChange}
                          />
                      </label>
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required"
                      name='status' 
                      value = {this.state.status}
                      onChange ={this.onChange}
                    >
                      <option value={true}>Kích Hoạt</option>
                      <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                      <button type="submit" className="btn btn-warning">Lưu </button>&nbsp;
                      <button type="reset" className="btn btn-danger" onClick = {this.onClear}>Hủy Bỏ</button>
                    </div>
                  </form>
                </div>
              </div>
      );
    }
  }
}

const mapStateToProps = (state) =>{
      return {
          isDisplay : state.isDisplayForm,
          taskEdit: state.itemEdit
      }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
      onSaveTask : (task) =>{
        dispatch(action.saveTask(task));
      },
      closeForm : () =>{
        dispatch(action.closeForm())
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
