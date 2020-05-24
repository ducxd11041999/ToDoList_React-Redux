import React, {Component} from 'react';
import  {connect} from 'react-redux'
import * as action from './../action/index.js'


class Search extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      keyWord : ''
    };
  }

  onChange =(event)=>
  {
      var target = event.target
      var name = target.name
      var value = target.value
      this.setState({
        [name]: value
      })
  }
  onSearch = () =>
  {
    this.props.onSearchKey(this.state.keyWord)
  }
  render() {
    var {keyWord} = this.state;
    return (
        <div className="input-group">
              <input type="text" 
              className="form-control" 
              placeholder="Nhập từ khóa..." 
              name ="keyWord"
              value = {keyWord}
              onChange = {this.onChange}
              />
              <span className="input-group-btn">
                  <button className="btn btn-primary" type="button"
                    onClick = {this.onSearch}
                    >
                      <span className="fa fa-search mr-5" />Tìm
                </button>
              </span>
          </div>  
    );
  }
}

const mapStateToProps = (state) =>{
      return {
      }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
      onSearchKey: (keyWord) =>{
          dispatch(action.searchKey(keyWord))
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search) 

