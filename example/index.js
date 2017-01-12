import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from '../src/TableContainer';
var columnDefs = [
  {headerName: "Group", field: 'group'},
  {headerName: "Athlete", field: "athlete"},
  {headerName: "Year", field: "year"},
  {headerName: "Country", field: "country"}
];

var rowData = [
  {group: 'Group A',
    participants: [
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'},
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'},
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'}
    ]},
    {group: 'Group B', athlete: 'Sausage', year: 'Spaceman', country: 'Winklepicker',
      participants: [
        {athlete: 'Natalie Coughlin', year: '2008', country: 'United States'},
        {athlete: 'Missy Franklin ', year: '2012', country: 'United States'},
        {athlete: 'Ole Einar Qjorndalen', year: '2002', country: 'Norway'},
        {athlete: 'Marit Bjorgen', year: '2010', country: 'Norway'},
        {athlete: 'Ian Thorpe', year: '2000', country: 'Australia'}
      ]},
      {group: 'Group C',
        participants: [
          {athlete: 'Janica Kostelic', year: '2002', country: 'Crotia'},
          {athlete: 'An Hyeon-Su', year: '2006', country: 'South Korea'}
        ]}
      ];


      class Example extends Component{
        constructor(props){
          super(props);
        }
        render(){
          return (<Table rows={rowData} cols={columnDefs}/>);
        }
      }

      ReactDOM.render(<Example/>, document.getElementById("example"));
