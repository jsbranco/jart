import React, {Component} from 'react';
import Row from './Row';
import ExpandedRow from './ExpandedRow';
import classNames from 'classnames';

class CollapsableRow extends Component
{
  constructor(props){
    super(props);
    this.state= {...props};
  }
  render()
  {
    let {rows, cols, currentGroup}= this.state;



    let tableRows=[];
    let rowCells=[];
    console.log(currentGroup);

    //Render collapsable Cell

    cols.forEach((col, index)=>{
      let column = col.field || col.cellRenderer;
      let classes = classNames({
        "cell":true,
        "freeze":col.freeze
      })
      if(col.type=="group")
      {
        rowCells.push(<div className={classes}><a onClick={()=>{this.state.toggleGroup(currentGroup.group)}}>{currentGroup.group}</a></div>)
      }
      else {

        rowCells.push(<div className={classes} key={index}>{currentGroup[column]}</div>);

      }
      console.log(currentGroup[column]);
    });

    tableRows.push(<div className="row" style={{textIndent:this.state.indent+"%"}}>{rowCells}</div>);
    if(this.state.expanded.indexOf(currentGroup.group)>=0)
    {

      tableRows.push(<ExpandedRow rows={currentGroup.children} expanded={this.state.expanded} cols={cols} currentGroup={currentGroup} toggleGroup={this.state.toggleGroup} indent={this.state.indent}/>)
    }
    cols = cols.slice(1,cols.length);

    return(<div>{tableRows}</div>);

  }
}
export default CollapsableRow;
