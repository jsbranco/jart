import React, {Component} from 'react';
import classNames from 'classnames';
import NestedRow from "./NestedRow";
import 'styles/Row.scss';

class Row extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};
  }
  render(){
    let row=[];
    let {cells, isHeader, cols}= this.state;
    let classes = classNames({
      "cell":true,
      "header":isHeader,
    })
    let rowCells;
    if(isHeader)
    {
      rowCells=  cells.map((cell, index)=>{
        return <div className={classes} key={index}>{cell.headerName}</div>
      });
      row.push(<div className="row headers" >{rowCells}</div>);
    }else {
      row.push(<NestedRow  rows={cells.participants} currentGroup={cells} cols={cols} toggleGroup={this.props.toggleGroup}/>)
      // if(typeof cells ==="object")
      // {
      //
      // }

    }

    return(<div>{row}</div>)
  }
}
export default Row;
