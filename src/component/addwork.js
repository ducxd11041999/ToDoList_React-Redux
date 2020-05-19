
import React, {Component} from 'react'
class AddWorks extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
    };
	}
	onToggleForm = () =>{
    if (this.props.taskediting)
    {
        console.log("here")
        this.props.onReceiveDisplay({ds:true, taskEditing:null})
    }
    else
    {
		    this.props.onReceiveDisplay({ds:!this.props.display, taskEditing:null})
	  }
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

export default AddWorks
