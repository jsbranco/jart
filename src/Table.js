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
    return(<div className="jart-table">{children}</div>)
  }
}
export default Table;
