import React from 'react'
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';


const App = () => {
  const listOfUnits = [
    {
      id: '01',
      Unit_Name: 'CV 1',
      Account: 'Econet',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '02',
      Unit_Name: 'CV Waterfall',
      Account: 'Cell c',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '03',
      Unit_Name: 'Waterfall 2',
      Account: 'Telecell',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '04',
      Unit_Name: 'Waterfall 3',
      Account: 'MTN',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '05',
      Unit_Name: 'Test Jengwa',
      Account: 'Jengwa',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '06',
      Unit_Name: 'Progressive 2',
      Account: 'Africom',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '07',
      Unit_Name: 'Kim 03',
      Account: 'BDG',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '08',
      Unit_Name: 'Hillcrest 05',
      Account: 'Econet',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '09',
      Unit_Name: 'Pinetown 01',
      Account: 'Telopne',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    },
    {
      id: '10',
      Unit_Name: 'KwaDukuza 02',
      Account: 'Pep Store',
      Site: '',
      Type: '', 
      Regstration_State: '',
      Status: ''
    }
  ]

  const renderUnits = (unit, index) => {
    return (
      <tr key= {index}>
        <td>{unit.Unit_Name}</td>
        <td>{unit.Account}</td>
        <td>{unit.Site}</td>
        <td>{unit.Type}</td>
        <td>{unit.Ragistration_State}</td>
        <td>{unit.Status}</td>
      </tr>
      
    )
  }

  return (
   
    <ReactBootstrap.Table striped bordered hover>
    <thead>
      <tr>
        <th>Unit Name</th>
        <th>Account</th>
        <th>Site</th>
        <th>Type</th>
        <th>Registration State</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        listOfUnits.map(renderUnits)
      }
    </tbody>
    
  </ReactBootstrap.Table>
      
  );
}

export default App;
