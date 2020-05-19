import React, {Component} from 'react';
class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort:{
        by: 'name',
        value: 1
      }
    };
  }
  onClick = (sortBy, sortValue) =>{
    this.setState({
      sort:{
        by:sortBy,
        value: sortValue
      }
    },()=> {
      //console.log(this.state)
    })
    this.props.onSort(this.state)
  }

  render() {
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li onClick = { () => this.onClick('name', 1)}>
                <a href="localhost:3000" role="button" 
                className = {this.state.sort.by ==='name'?(this.state.sort.value===1?'sort-selected':'') :''} >
                  <span className="fa fa-sort-alpha-asc pr-5">
                    Tên A-Z
                  </span>
                </a>
              </li>
              <li onClick = { () => this.onClick('name', -1)}>
                <a href="localhost:3000" role="button"
                className = {this.state.sort.by ==='name'?(this.state.sort.value===-1?'sort-selected':'') :''}
                >
                  <span className="fa fa-sort-alpha-desc pr-5">
                    Tên Z-A
                  </span>
                </a>
              </li>
              <li role="separator" className="divider" />
              <li onClick = { () => this.onClick('status', 1)}>
              <a href="localhost:3000"role="button" 
              className = {this.state.sort.by ==='status'?(this.state.sort.value===1?'sort-selected':'') :''}
              >Trạng Thái Kích Hoạt</a></li>
              <li onClick = { () => this.onClick('status', -1)}>
              <a href="localhost:3000" role="button"
              className = {this.state.sort.by ==='status'?(this.state.sort.value===-1?'sort-selected':'') :''}
              >Trạng Thái Ẩn</a></li>
            </ul>
        </div>
           
    );
  }
}

export default Sort
