import React, {Component} from 'react';
import classNames from 'classnames';
import 'styles/Row.scss';

class NestedRow extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};
  }
  _expandRow(currentRow, cols, outputRows, level)
  {
    let tableRows=[];
    let rowClasses ={};
    rowClasses["cell"]=true;
    rowClasses["indent-"+level]=true
    let classes = classNames({
      "cell":true
    })
    let rowCells=[];
    if(currentRow.length>0)
    {
      level++;
      currentRow.forEach((row)=>{
        tableRows.push(...this._expandRow(row, cols));
      });
      return tableRows;
    }
    rowCells.push(<div className={classes}><a onClick={()=>{this.props.toggleGroup(currentRow.group)}}>{currentRow.group}</a></div>)

    cols.forEach((col, index)=>{
      let column = col.field || col.cellRenderer;
      rowCells.push(<div className={classes} key={index}>{currentRow[column]}</div>)
    })
    tableRows.push(<div className="row" >{rowCells}</div>)
    if(currentRow.children)
    {
      tableRows.push(...this._expandRow(currentRow.children, cols))
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
      rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>)
    })
    tableRows.push(<div className="row" >{rowCells}</div>)
    // if(this.state.expanded.indexOf(currentGroup)>=0)
    // {

      rows.forEach((row, index)=>{
        rowCells = [];
        rowCells.push(<div className={classes}>{currentGroup.group}</div>)
        cols.forEach((col, colIndex)=>{
          let column = col.field || col.cellRenderer;
          // rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>)
          rowCells.push(<div className={classes} key={index+"c"+colIndex}>{row[column]}</div>)
        })

        tableRows.push(<div className="row indent" key={index}>{rowCells}</div>);
        if(row.children)
        {
          tableRows.push(...this._expandRow(row, cols, 1))
        }
      });

    // }


    return(<div>{tableRows}</div>)
  }
}
export default NestedRow;
