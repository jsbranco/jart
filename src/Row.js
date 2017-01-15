import React, {Component} from 'react';
import classNames from 'classnames';
import NestedRow from "./NestedRow";
import CollapsableRow from "./CollapsableRow";
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
        return <div className={classes} key={index}>{cell.display}</div>
      });
      row.push(<div className="row headers" >{rowCells}</div>);
    }else {
      // cols = cols.slice(1,cols.length);

      // row.push(<NestedRow  rows={cells.children} currentGroup={cells} cols={cols} expanded={this.state.expanded} toggleGroup={this.props.toggleGroup}/>)
      row.push(<CollapsableRow  rows={cells.children} currentGroup={cells} cols={cols} expanded={this.state.expanded} toggleGroup={this.props.toggleGroup} indent={1}/>)
    }
    return(<div>{row}</div>)
  }
}
export default Row;
