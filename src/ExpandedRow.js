import React, {Component} from 'react';
import Row from './Row';
import CollapsableRow from './CollapsableRow';
import classNames from 'classnames';

class ExpandedRow extends Component
{
  constructor(props){
    super(props);
    this.state= {...props};
  }
  render()
  {
    let classes = classNames({
      "cell":true
    });

    let {rows, cols, currentGroup}= this.state;
    let tableRows=[];
    let rowCells;
    rows.forEach((row, index)=>{
      if(!row.children){
      rowCells = [];
      cols.forEach((col, index)=>{
        let classes = classNames({
          "cell":true,
          "freeze":col.freeze
        })
        if(col.field==="group")
        {
          rowCells.push(<div className={classes} >{currentGroup.group}</div>)
        }
        let column = col.field || col.cellRenderer;
        if(row[column])
        {
          rowCells.push(<div className={classes} key={index}>{row[column]}</div>)

        }
      })
      tableRows.push(<div className="row" style={{textIndent:this.state.indent+1+"%"}} >{rowCells}</div>)
      }
      if(row.children)
      {

          tableRows.push(<CollapsableRow rows={row.children} cols={cols} expanded={this.state.expanded} currentGroup={row} toggleGroup={this.state.toggleGroup} indent={this.state.indent+1}/>)
      }
    });
    return(<div>{tableRows}</div>);

  }
}
export default ExpandedRow;
