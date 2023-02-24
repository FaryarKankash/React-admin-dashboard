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
  timeLeft: number,
  StartDate: number,
  category: string,
  status: string,
) {
  return { name, timeLeft, StartDate, category, status: statusModel};
}

const rows = [
  createData('Web project', 159, 6.0, "Work", "Done"),
  createData('Social', 237, 9.0, "Work", "Done"),
  createData('Frontend', 262, 16.0, "Work", "Todo"),
  createData('DB managment', 305, 3.7, "Work", "Todo"),
  createData('Python tutorial', 356, 16.0, "Work", "undone"),
];

export default function TaskTable() {



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

  

  return (
    <>
    <TableContainer component={Paper} className="p-4">
     <h5>Task table</h5>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time left</TableCell>
            <TableCell align="center">Start date</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center"></TableCell>
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
              <TableCell align="center">{row.timeLeft}</TableCell>
              <TableCell align="center">{row.StartDate}</TableCell>
              <TableCell align="center"><Chip color='success' size='small' label={row.category} /></TableCell>
              <TableCell align="center">
                {
                    row.status.Todo?(<Chip color='error' size='small' label={row.status.Todo} />):
                    (row.status.Done?(<Chip color='success' size='small' label={row.status.Done} />):
                    (row.status.undone?(<Chip color='secondary' size='small' label={row.status.undone} />):
                    (<></>)))
                }
              </TableCell>
              <TableCell align="right">
                <Button disableElevation size='small' className='mx-1' variant="contained" color='secondary'>Delete</Button>
                <Button disableElevation size='small' className='mx-1 mt-md-0 mt-1' variant="contained" color='info'>Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
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
      </Table>
    </TableContainer>
    </>
  );
}