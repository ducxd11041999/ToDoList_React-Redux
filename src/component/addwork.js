
import React, {Component} from 'react'
class AddWorks extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	onToggleForm = () =>{
		console.log(this.props.display)
		this.props.onReceiveDisplay(!this.props.display)
		
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
