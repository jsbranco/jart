import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from '../src/TableContainer';
var columnDefs = [
  {display: "Group", field: 'group', freeze:true, type:"group"},
  {display: "Athlete", field: "athlete"},
  {display: "Year", field: "year"},
  {display: "Year", field: "year"},
  {display: "Year", field: "year"},
  {display: "Year", field: "year"},
  {display: "Year", field: "year"},
  {display: "Year", field: "year"},
  {display: "Country", field: "country"}
];

var rowData = [
  {group: 'Group A',
    children: [
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'},
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'},
      {athlete: 'Michael Phelps', year: '2008', country: 'United States'}
    ]
  },
  {group: 'Group B', athlete: 'Sausage', year: 'Spaceman', country: 'Winklepicker',
    children: [
      {group:"Group D", athlete:"John", year:"Spaceee",
        children:[
        {athlete: 'Natalie Coughlin', year: '2008', country: 'United States'},
        {athlete: 'Missy Franklin ', year: '2012', country: 'United States'},
        {athlete: 'Ole Einar Qjorndalen', year: '2002', country: 'Norway'},
        {group:"Group E", athlete:"John", year:"Spaceee",
          children:[
          {athlete: 'Natalie Coughlin', year: '2008', country: 'United States'},
          {athlete: 'Missy Franklin ', year: '2012', country: 'United States'},
          {athlete: 'Ole Einar Qjorndalen', year: '2002', country: 'Norway'},
        ]},
      ]},
      {athlete: 'Marit Bjorgen', year: '2010', country: 'Norway'},
      {athlete: 'Ian Thorpe', year: '2000', country: 'Australia'}
    ]},
    {group: 'Group C',
      children: [
        {athlete: 'Janica Kostelic', year: '2002', country: 'Crotia'},
        {athlete: 'An Hyeon-Su', year: '2006', country: 'South Korea'}
      ]}
    ];


    class Example extends Component{
      constructor(props){
        super(props);
      }
      render(){
        return (<Table rows={rowData} height={300} cols={columnDefs}/>);
      }
    }

    ReactDOM.render(<Example/>, document.getElementById("example"));
