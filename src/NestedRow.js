import React, {Component} from 'react';
import classNames from 'classnames';
import 'styles/Row.scss';

class NestedRow extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};
  }
  _expandRow(currentRow, cols, indent)
  {
    let tableRows=[];
    let rowClasses ={};
    let classes = classNames(rowClasses)
    let rowCells=[];

    if(currentRow.length>0)
    {
      indent+=1;
      currentRow.forEach((row)=>{
        tableRows.push(...this._expandRow(row, cols, indent));
      });
      return tableRows;
    }
    rowCells.push(<div className="cell"><a onClick={()=>{this.props.toggleGroup(currentRow.group)}}>{currentRow.group}</a></div>)

    cols.forEach((col, index)=>{
      let column = col.field || col.cellRenderer;
      rowCells.push(<div className="cell" key={index}>{currentRow[column]}</div>)
    })
    tableRows.push(<div className="row" style={{textIndent:indent+"%"}} >{rowCells}</div>)
    if(currentRow.children)
    {
      tableRows.push(...this._expandRow(currentRow.children, cols, indent));
    }
    return tableRows;
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
      rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>);
    })
    tableRows.push(<div className="row" style={{textIndent:"1%"}}>{rowCells}</div>);
    if(this.state.expanded.indexOf(currentGroup.group)>=0)
    {

      rows.forEach((row, index)=>{
        rowCells = [];
        rowCells.push(<div className={classes}>{currentGroup.group}</div>)
        cols.forEach((col, colIndex)=>{
          let column = col.field || col.cellRenderer;
          // rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>)
          rowCells.push(<div className={classes} key={index+"c"+colIndex}>{row[column]}</div>)
        })

        tableRows.push(<div className="row" style={{textIndent:"2%"}} key={index}>{rowCells}</div>);
        rowCells=[];
        rowCells.push(<div className="cell"><a onClick={()=>{this.props.toggleGroup(row.group)}}>{row.group}</a></div>)

        cols.forEach((col, index)=>{
          let column = col.field || col.cellRenderer;
          rowCells.push(<div className="cell" key={index}>{row[column]}</div>)
        })
        tableRows.push(<div className="row" style={{textIndent:"2%"}} >{rowCells}</div>)
        if(row.children && this.state.expanded.indexOf(row.group)>=0)
        {
          tableRows.push(...this._expandRow(row.children, cols, 3))
        }
      });

    }


    return(<div>{tableRows}</div>)
  }
}
export default NestedRow;
