import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useState } from 'react';


// todo status
enum statusModel {
    Done = "Done",
    Todo = "Todo",
    undone = "undone"
}

function createData(
  name: string,
  Email: string,
  Phone: number,
  Date: string,
  Summary: string,
) {
  return { name, Email, Phone, Date, Summary};
}

const rows = [
  createData('Jhon', "Jhon2233@gmail.com", 9171113363, "01/02/1401", "Ruby on rails website..."),
  createData('Lila', "Lila@gmail.com", 9011316677, "22/09/1401", "Ai python project..."),
  createData('Sina', "SinaBeheshti@gmail.com", 9111238754, "31/04/1401", "Todo application..."),
];

export default function MessageTable() {



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  function renderTableHeader() {
    return(
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone number</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
    )
  }


  function renderTableFooter() {
    return(
        <TableFooter className='col-12'>
        <TableRow className='col-12'>
          <TablePagination
          className='col-12'
            rowsPerPageOptions={[5, 10, 25]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    )
  }
  

  return (
    <>
    <TableContainer component={Paper} className="p-4">
     <h5>Messages Table</h5>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {
            renderTableHeader()
        }
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.Phone}</TableCell>
              <TableCell align="center">{row.Date}</TableCell>
              <TableCell align="center">{row.Summary}</TableCell>
              <TableCell align="right">
                <Button disableElevation size='small' className='mx-1' variant="contained" color='success'>Read</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {
            renderTableFooter()
        }
      </Table>
    </TableContainer>
    </>
  );
}