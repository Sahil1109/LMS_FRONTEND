import React from "react";
// import ApprovalHistory from "../LeaveApproval/ApprovalHistory";
import PendingRequestsTable from "./PendingRequestsTable";
import ApprovalHistoryTable from "./ApprovalHistoryTable";

function LeaveApproval() {
  return (
    <div>
      <PendingRequestsTable></PendingRequestsTable>
      <ApprovalHistoryTable></ApprovalHistoryTable>
    </div>
  );
}

export default LeaveApproval;
