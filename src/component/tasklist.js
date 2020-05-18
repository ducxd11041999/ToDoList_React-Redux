import React, {Component} from 'react';
import TaskItem from './taskitem.js'
class TaskList extends Component {
  render() {
    var {tasks} = this.props;
    var elementTask = tasks.map((task, index) =>
    {
        return <TaskItem 
        key={index} 
        index={index} 
        task ={task}
        onUpdateStatus = {this.props.onUpdateStatus}
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
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <select className="form-control">
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

export default TaskList
