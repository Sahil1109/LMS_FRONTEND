import React from "react";
import "./ApprovalHistoryTable.css";

function ApprovalHistory() {
  return (
    <div>
      <h3 id="approvalHeading">APPROVAL HISTORY</h3>
      <div id="tableApproval">
        <table>
          <tr id="thr">
            <th>Leave Type</th>
            <th>Employee Name</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Days</th>
            <th>Status</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ApprovalHistory;
// import React from "react";
// import { connect } from "react-redux";
// // import "./LeaveTable.css";
// import ApprovalHistoryEntry from "./ApprovalHistoryEntry";

// function ApprovalHistoryTable(props) {
//   const getRows = () => {
//     return props.data.map(entry => {
//       return (
//         <ApprovalHistoryEntry
//           id={entry.id}
//           entry={entry}
//         ></ApprovalHistoryEntry>
//       );
//     });
//   };

//   return (
//     <div id="table">
//       <h3>ApprovalHistory</h3>
//       <table>
//         <tr id="thr">
//           <th>Leave Type</th>
//           <th>From</th>
//           <th>To</th>
//           <th>Days</th>
//           <th>Status</th>
//           <th>Edit</th>
//         </tr>
//         {getRows()}
//       </table>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     data: state.data
//   };
// };

// export default connect(mapStateToProps)(ApprovalHistoryTable);
