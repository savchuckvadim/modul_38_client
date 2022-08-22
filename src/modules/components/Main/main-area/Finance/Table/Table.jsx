import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from './Table.module.css';
import { useEffect } from 'react';

import { LightLoadingPageContainer } from '../../../../Elements/Loading/Light-Loading-Page-Container';


/////////////TODO:
//Advertiser:
//Offers
//Masters
//Transitions
//Expenses

//Master
//Offers (followed)
//Transitions
//Profit

//Admin
//Links
//Transitions
//Fail-Transitions
//Profit


const BasicTable = (props) => {


  useEffect(() => {

    props.getFinance()

  }, [])
  let totalMaster = {
    'name': 'Total',
    'transitions': 0,
    'profit': 0,
    'totalProfit': 0,
    'created_at': null

  };
  let data = props.finance;
  let headers = [];
  let rows = [];
  let total = [];

  if (data.role) {
    rows = data.finance.map((obj, index) => {
      let cells = [];


      for (let prop in obj) {
        if (index === 0) {
          headers.push(<TableCell key={`hd-${prop}-${index}`} align="left">{prop}</TableCell>)
        }
        if (prop === 'created_at') {
          let date = new Date(obj[prop]).toLocaleDateString()
          debugger
          cells.push(<TableCell key={`cl-${prop}-${index}`} align="left">{date}</TableCell>)

        } else {
          cells.push(<TableCell key={`cl-${prop}-${index}`} align="left">{obj[prop]}</TableCell>)
        }


        if (Number.isFinite(obj[prop])) {

          totalMaster[prop] = totalMaster[prop] + obj[prop];

        }

      }

      return <>
        <TableRow
          key={`${obj[0]}-${index} `}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {cells}
        </TableRow>
      </>
    })


    for (let prop in totalMaster) {
      if (Number.isFinite(totalMaster[prop])) {

        total.push(<TableCell key={`ttl-${prop}`} align="left">{totalMaster[prop].toFixed(2)}</TableCell>)
      } else {
        total.push(<TableCell key={`ttl-${prop}`} align="left">{totalMaster[prop]}</TableCell>)
      }


    }

  } else {
    return <LightLoadingPageContainer />
  }

  return (
    <TableContainer className={style.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            {headers}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
          <TableRow
            key={`total-row `}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {total}
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;