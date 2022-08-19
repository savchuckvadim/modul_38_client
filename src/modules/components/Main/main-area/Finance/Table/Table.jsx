import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from './Table.module.css';


function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [ //Advertiser
  createData('Offers', 159, 6.0, 24, 4.0),
  createData('Masters', 159, 6.0, 24, 4.0),
  createData('Transitions', 237, 9.0, 37, 4.3),
  createData('Fail-Transitions', 237, 9.0, 37, 4.3),
  createData('Expenses', 262, 16.0, 24, 6.0), //расходы
  
];
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


const BasicTable = (props) =>  {
  return (
    <TableContainer className={style.table} component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Offers</TableCell>
            <TableCell align="right">Masters</TableCell>
            <TableCell align="right">Transitions</TableCell>
            <TableCell align="right">Expenses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;