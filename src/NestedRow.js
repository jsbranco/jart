import React, {Component} from 'react';
import classNames from 'classnames';
import 'styles/Row.scss';

class NestedRow extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};
  }
  render(){
    let {rows, cols, currentGroup}= this.state;
    cols = cols.slice(1,cols.length);

    let classes = classNames({
      "cell":true
    })
    let tableRows=[];
    let rowCells=[];
    rowCells.push(<div className={classes}><a onClick={()=>{this.props.toggleGroup(currentGroup.group)}}>{currentGroup.group}</a></div>)

    cols.forEach((col, index)=>{
      let column = col.field || col.cellRenderer;
      rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>)
    })
    tableRows.push(<div className="row" >{rowCells}</div>)
    if(currentGroup.expanded)
    {
      tableRows.push(...rows.map((row, index)=>{
        rowCells = [];
        rowCells.push(<div className={classes}>{currentGroup.group}</div>)
        cols.forEach((col, colIndex)=>{
          let column = col.field || col.cellRenderer;
          // rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>)
          rowCells.push(<div className={classes} key={index+"c"+colIndex}>{row[column]}</div>)
        })

        return <div className="row" key={index}>{rowCells}</div>
      }));
    }


    return(<div>{tableRows}</div>)
  }
}
export default NestedRow;
