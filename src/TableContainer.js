import React, {Component} from 'react';
import Table from './Table';
import Row from './Row';
class TableContainer extends Component{
  constructor(props)
  {
    super(props);
    this.state={...props};

  }
  toggleGroup(toggledGroup)
  {
    let rows = this.state.rows;
    let group = rows.map((groups)=>
    {
      return groups.group
    }).indexOf(toggledGroup);
    rows[group].expanded=!rows[group].expanded;
    this.setState({...this.state, rows:rows});
  }
  render()
  {
    let {cols, rows} = this.state;
    let header = <Row cells={cols} isHeader={true}/>
    let tableRows = rows.map((row, index)=>{
      return <Row cells={row} key={index} cols={cols}  toggleGroup={this.toggleGroup.bind(this)}/>
    })
    return(<Table className="jart-table"> {header}   {tableRows}</Table>);

  }
}
export default TableContainer;
