import React, {Component} from 'react';
import TaskItem from './taskitem.js'
import  {connect} from 'react-redux'
class TaskList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      filterName: '',
      filterStutus: -1
    };
  }
  onChange = (event) =>
  {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.props.onFilter(
          name === "filterName" ? value: this.state.filterName,
          name === "filterStutus" ? value : this.state.filterStutus
      )
      this.setState({
          [name] : value
      })
  }
  render() {
    //console.log(this.props.todos)
    var {tasks} = this.props;
    var {filterName, filterStutus} = this.state;
    var elementTask = tasks.map((task, index) =>
    {
        return <TaskItem 
        key={index} 
        index={index} 
        task ={task}
        onEditData =  {this.props.onEditData}
        />

    })
    return (
          <table className="table table-bordered table-hover mt-15">
                <thead>
                  <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" 
                        name="filterName" 
                        value = {filterName}
                        onChange = {this.onChange} />
                      </td>
                      <td>
                        <select className="form-control" 
                        name="filterStutus"
                        value = {filterStutus}
                        onChange = {this.onChange}
                        >
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                  {
                    elementTask
                  }
                </tbody>
            </table>
    );
  }
}

const mapStateToProps = (state) =>{
    return ({
        tasks: state.tasks
    })
}
export default connect(mapStateToProps, null)(TaskList)
