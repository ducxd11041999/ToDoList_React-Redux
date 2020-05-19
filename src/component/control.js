import React, {Component} from 'react';
import Search from './search.js'
import Sort from './sort.js'
class Control extends Component {
  render() {
    return (
      <div className="container">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Search onSearch = {this.props.onSearch}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Sort onSort = {this.props.onSort}/>
          </div>
      </div>
    );
  }
}

export default Control
