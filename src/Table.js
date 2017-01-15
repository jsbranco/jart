import React, {Component} from 'react';
class Table extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};
  }
  render()
  {
    let {children}  = this.props;
    return(<div className="jart-table" style={{height:this.state.height, overflowX:"scroll"}}>{children}</div>)
  }
}
export default Table;
