import React, { useContext,useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, styled } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  Snackbar
} from "@material-ui/core/";
import MuiAlert from "@material-ui/lab/Alert";
import PendingTableRow from "./PendingTableRow";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import axios from "axios";
import RootURL from "../../handlers/RootUrl";
//getting context
import { ApprovalHistoryContext } from "../../contexts/AprrovalHistory/ApprovalHistoryContext";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const PendingTable = () => {
  const [approveOpen,setApproveOpen]=useState(false)
  const [rejectOpen,setRejectOpen]=useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  let [ahistory, setAhistory] = useContext(ApprovalHistoryContext);
  let rev_history;
  console.log("pending approval history:", ahistory);
  let emptyRows = null;
  const setEmptyRows = () => {
    /*we are doing this so that pending leaves in the end will be pushed to front 
      as in pending table , we have to go to next page to see leaves*/
    rev_history = ahistory.reverse();
    emptyRows =
      rowsPerPage - Math.min(rowsPerPage, ahistory.length - page * rowsPerPage);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const onStatusChange = (_id, status) => {
    axios
      .patch(`${RootURL}/leaves/${_id}`, { status: status })
      .then(res => {
        let newahistory = ahistory.map(entry => {
          entry.status = entry.id === _id ? status : entry.status;
          return entry;
        });
        status==="approved"?setApproveOpen(true):setRejectOpen(true)
        setAhistory(newahistory);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return ahistory === undefined ? null : (
    <TableContainer component={Paper}>
      {setEmptyRows()}
      <Table aria-label="custom pagination table">
        <CustomHeader>
          <TableRow>
            <CustomHeaderCell>Leave Type</CustomHeaderCell>
            <CustomHeaderCell align="center">Employee Name</CustomHeaderCell>
            <CustomHeaderCell align="center">From Date</CustomHeaderCell>
            <CustomHeaderCell align="center">To Date</CustomHeaderCell>
            <CustomHeaderCell align="center">No. of Days</CustomHeaderCell>
            <CustomHeaderCell align="center">Action</CustomHeaderCell>
          </TableRow>
        </CustomHeader>
        <TableBody>
          {(rowsPerPage > 0
            ? //need to check this code to see if any more variables need to be changed
              rev_history.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : rev_history
          ).map(row => {
            console.log("checking:", row);
            if (row.status === "pending") {
              return (
                <PendingTableRow
                  onStatusChange={onStatusChange}
                  key={rev_history.indexOf(row)}
                  row={row}
                />
              );
            } else {
              return;
            }
          })}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 4]}
              colSpan={3}
              count={ahistory.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Snackbar
        open={approveOpen}
        autoHideDuration={1500}
        onClose={() => {
          setApproveOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setApproveOpen(false);
          }}
          severity="success"
        >
          Leave is Approved
        </Alert>
      </Snackbar>
      <Snackbar
        open={rejectOpen}
        autoHideDuration={1500}
        onClose={() => {
          setRejectOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setRejectOpen(false);
          }}
          severity="error"
        >
          Leave is rejected
        </Alert>
      </Snackbar>
    </TableContainer>
  );
};

export default PendingTable;

const CustomHeader = styled(TableHead)(({ theme }) => ({
  background: theme.palette.primary.light
}));

const CustomHeaderCell = styled(TableCell)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  padding: "0.5rem"
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
