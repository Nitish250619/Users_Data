import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "Email", label: "Email", minWidth: 100 },
  { id: "Roles", label: "Roles", minWidth: 100 },
  { id: "Status", label: "Status", minWidth: 100 },
];

export default function UserTable({ data }) {
  const [rows, setRows] = React.useState(data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deactivatedRows, setDeactivatedRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleToggleStatus = (row) => {
    const updatedDeactivatedRows = deactivatedRows.includes(row.name)
      ? deactivatedRows.filter((name) => name !== row.name)
      : [...deactivatedRows, row.name];
    setDeactivatedRows(updatedDeactivatedRows);
    console.log(updatedDeactivatedRows);
    console.log(`Toggle Activation for ${row.name}`);
  };

  const handleRoleChange = (event, row) => {
    const updatedRows = [...rows];
    const rowIndex = updatedRows.findIndex((r) => r.name === row.name);
    updatedRows[rowIndex].Roles = event.target.value;
    setRows(updatedRows);
    console.log(`Role changed for ${row.name}: ${event.target.value}`);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "Roles" ? (
                        <Select
                          value={row.Roles}
                          onChange={(event) => handleRoleChange(event, row)}
                        >
                          <MenuItem value="Banker">Banker</MenuItem>
                          <MenuItem value="Editor">Editor</MenuItem>
                          <MenuItem value="Cashier">Cashier</MenuItem>
                        </Select>
                      ) : column.id === "Status" ? (
                        <Button
                          variant="outlined"
                          color={
                            deactivatedRows.includes(row.name)
                              ? "primary"
                              : "secondary"
                          }
                          onClick={() => handleToggleStatus(row)}
                          style={{
                            backgroundColor: deactivatedRows.includes(row.name)
                              ? "#FF8080"
                              : "#61E185",
                            color: "#FFFFFF",
                          }}
                        >
                          {deactivatedRows.includes(row.name)
                            ? "Deactivate"
                            : "Activate"}
                        </Button>
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
