import { TableCell, TableRow } from "@mui/material";


const Total = (props) => {
    let total = [];
    for (let prop in props.total) {
        if (Number.isFinite(props.total[prop])) {

            total.push(<TableCell key={`ttl-${prop}`} align="left">{props.total[prop]}</TableCell>)
        } else {
            total.push(<TableCell key={`ttl-${prop}`} align="left">{props.total[prop]}</TableCell>)
        }
    }
    return (
        <TableRow
            key={`total-row `}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >{total}
        </TableRow>
    )

};

export default Total