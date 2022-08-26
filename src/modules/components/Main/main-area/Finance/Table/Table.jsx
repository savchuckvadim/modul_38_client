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
import Total from './Total/Total';


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


  
  let data = props.finance;
  let headers = [];
  let rows = [];
  let total = <></>;

  if (data.role) {
    rows = data.finance.items.map((obj, index) => {
      let cells = [];


      for (let prop in obj) {
        if (index === 0) {
          headers.push(<TableCell key={`hd-${prop}-${index}`} align="left">{prop}</TableCell>)
        }
        if (prop === 'activity' || prop === 'created') {
          const date = new Date(obj[prop]).toLocaleDateString()
          const time = new Date(obj[prop]).toLocaleTimeString()
         

          cells.push(<TableCell key={`cl-${prop}-${index}`} align="left">
           <p className={style.date}>{time}</p>
           <p className={style.date}>{date}</p>
            </TableCell>)

        }else if(prop === 'link') {
          const link = obj[prop].slice(22)
          cells.push(<TableCell key={`cl-${prop}-${index}`} align="left">{link}</TableCell>)
        }else {
          cells.push(<TableCell key={`cl-${prop}-${index}`} align="left">{obj[prop]}</TableCell>)
        }


      }

      return <>
        <TableRow
          key={`${'main-row'}-${index} `}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {cells}
        </TableRow>
      </>
    })


    total = <Total total={data.finance.total} />

  } else {
    return <LightLoadingPageContainer />
  }

  return (
    <TableContainer key={'table-container-1'} className={style.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead key={`tbl-hd `}>
          <TableRow key={`tbl-row `}>
            {headers}
          </TableRow>
        </TableHead>
        <TableBody key={`tbl-bdy `}>
          {rows}
          {total}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;