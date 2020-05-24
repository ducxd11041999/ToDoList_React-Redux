import  {connect} from 'react-redux'
import * as action from './../action/index.js'
import React, {Component} from 'react'
class AddWorks extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
    };
	}
	onToggleForm = () =>{
    console.log(this.props)
    if(this.props.taskEdit && this.props.taskEdit.id !==null){
        this.props.openForm();
    }else
    {
		    this.props.onToggleForm()
    }
        this.props.onClearTask({
          id :'',
          name: '',
          status: true
        });
  }
  render() {
    return (

    <div className="container">
    	<button type="button" className="btn btn-primary" onClick = {this.onToggleForm}>
          	<span className="fa fa-plus mr-5" />Thêm Công Việc
      	</button>
    </div>
    );
  }
}

const mapStateToProps = (state) =>{
      return {
          taskEdit : state.itemEdit
      }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
      onToggleForm: () =>
      {
          dispatch(action.toggleForm());
      },
      onClearTask: (task) =>
      {
          dispatch(action.editTask(task));
      },
      openForm : () =>{
          dispatch(action.openForm())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddWorks)
