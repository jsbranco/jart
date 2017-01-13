import React, {Component} from 'react';
import Table from './Table';
import Row from './Row';
class TableContainer extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props, expanded:["Group B"]};

  }
  toggleGroup(toggledGroup)
  {
    let expanded= this.state.expanded;
    let pos = expanded.indexOf(toggledGroup);
    if(pos)
    {
      expanded.splice(pos,1);
    }
    else {
      this.state.expanded.push(toggledGroup);
    }
    this.setState({...this.state, expanded:this.state.expanded});
  }
  render()
  {
    let {cols, rows,expanded} = this.state;
    let header = <Row cells={cols} isHeader={true}/>
    let tableRows = rows.map((row, index)=>{
      return <Row cells={row} key={index} cols={cols}  toggleGroup={this.toggleGroup.bind(this)} expanded={expanded}/>
    })
    return(<Table className="jart-table"> {header}   {tableRows}</Table>);

  }
}
export default TableContainer;
