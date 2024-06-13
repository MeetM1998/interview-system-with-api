import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import userActions from "../../Redux/Users/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserListTable = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userDetailsTable = useSelector((state) => state.users.UsersTable);

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(userActions.singleRemoveUsersRequest());
    history.push("/users-list/add");
  };

  useEffect(() => {
    dispatch(userActions.getUsersReport());
  }, []);

  const editHandler = (id) => {
    dispatch(userActions.getSingleUsersRequest(id));
    history.push(`/users-list/edit/${id}`);
  };

  const deleteResultHandler = (id) => {
    dispatch(userActions.deleteUsers(id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 2,
          mx: 1,
        }}
      >
        <Typography variant="h5">User List</Typography>

        <Button
          variant="contained"
          onClick={handleAddUser}
          sx={{
            bgcolor: "#999c19",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#b4b81c",
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#999c19" }}>
            <TableRow>
              <StyledTableCell align="left">FirstName</StyledTableCell>
              <StyledTableCell align="left">LastName</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userDetailsTable.map((row) => (
              <StyledTableRow key={`${row._id}`}>
                <StyledTableCell align="left">{row.first_name}</StyledTableCell>
                <StyledTableCell align="left">{row.last_name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => editHandler(row._id)}>
                    <EditIcon sx={{ color: "mediumseagreen" }} />
                  </Button>
                  <Button onClick={() => deleteResultHandler(row._id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

        {userDetailsTable.length === 0 && (
          <Typography variant="h6" sx={{ color: "red", my: 2 }}>
            No Record Found!
          </Typography>
        )}
      </TableContainer>
    </Box>
  );
};

export default UserListTable;
