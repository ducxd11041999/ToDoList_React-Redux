import React, {Component} from 'react';
import TaskItem from './taskitem.js'
import  {connect} from 'react-redux'
import * as action from './../action/index.js'
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
      var filter = {
          name : name === "filterName" ? value: this.state.filterName,
          status: name === "filterStutus" ? value : this.state.filterStutus
      }
      this.props.onFilterTable(filter)
      this.setState({
          [name] : value
      })
  }
  render() {
    //console.log(this.props.todos)
    var {tasks, filter} = this.props;
    console.log(filter)
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
    var filterName = filter.name;
    var filterStutus = filter.status;
    var elementTask = tasks.map((task, index) =>
    {
        return <TaskItem 
        key={index} 
        index={index} 
        task ={task}
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
        tasks: state.tasks,
        filter : state.filter
    })
}
const mapDispatchToProps = (dispatch, props) =>{
    return ({
        onFilterTable: (filter) =>{
              dispatch(action.filterTask(filter))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
