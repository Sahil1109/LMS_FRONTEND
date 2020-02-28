import React from "react";
import "./PendingRequestTable.css";

function PendingRequests() {
  return (
    <div>
      <h3 id="pendingHeading">PENDING REQUESTS</h3>
      <div id="tablePending">
        <table>
          <tr id="thr">
            <th>Leave Type</th>
            <th>Employee Name</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Days</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default PendingRequests;

// import React from "react";
// import { connect } from "react-redux";
// import "./PendingRequestTable.css";
// import PendingRequestEntry from "./PendingRequestEntry";

// function PendingRequestTable(props) {
//   const getRows = () => {
//     return props.data.map(entry => {
//       return (
//         <PendingRequestEntry id={entry.id} entry={entry}></PendingRequestEntry>
//       );
//     });
//   };

//   return (
//     <div id="table">
//       <h3>Pending request</h3>
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

// export default connect(mapStateToProps)(PendingRequestTable);
