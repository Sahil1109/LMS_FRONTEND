import React, { Component } from "react";
import Date from "./Date";
// import TypeOfLeave from './TypeOfLeave'
import "../styles/ApplyLeave.css";
import DatePicker from "react-date-picker";
import { connect } from "react-redux";

import emailNotify from "../handlers/emailNotify";

class ApplyLeave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startdate: new Date().parse,
      enddate: new Date().parse,
      endleavetype: "",
      noofdays: 1,
      reason: "",
      file: null,
      type: ""
    };
  }

  handleEndLeaveChange = event => {
    this.setState({
      endleavetype: event.target.value
    });
  };
  handleChange = event => {
    this.setState({
      type: event.target.value
    });
  };

  onStartDateChange = startdate => this.setState({ startdate });
  onEndDateChange = enddate => this.setState({ enddate });

  // handleNoOfDaysChange = event => {
  //   this.setState({
  //     noofdays: event.target.value
  //   });
  // };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({
      file: file
    });
  }

  handleUpload(e) {
    console.log(this.state, "Tehhe");
  }

  handleReasonChange = event => {
    this.setState({
      reason: event.target.value
    });
  };

  onSubmitButton = event => {
    event.preventDefault();
    if (this.state.type != "N/A") {
      // console.log(this.state.startdate);
      let startDate = this.state.startdate.toUTCString();
      // let date = `this.state.startdate.getDate()+this.state.startdate.getDate()+this.state.startdate.getDate()`
      // let data = this.state.startdate.getFull();
      // console.log(date);
      let day = this.state.startdate.getDate();
      // let endDate = this.state.enddate.toUTCString();
      console.log(startDate);
      startDate = startDate
        .split(" ")
        .slice(2, 4)
        .join(" ");
      startDate = day + " " + startDate;
      // endDate = endDate
      //   .split(" ")
      //   .slice(1, 4)
      //   .join(" ");
      console.log(startDate);
      this.props.addLeave(this.state.type, startDate, 1);

      // this.props.addLeave(
      //   this.state.type,
      //   startDate,
      //   this.state.startleavetype,
      //   this.state.endleavetype,
      //   endDate
      // );

      alert("You Have Successfully Applied for a leave");

      // emailNotify(
      //   this.state.startdate,
      //   this.state.noofdays,
      //   this.state.type,
      //   this.state.reason
      // );
      event.target.reset();
    }
  };

  render() {
    return (
      <div className="applyLeave">
        <form onSubmit={this.onSubmitButton}>
          <div id="dateP">
            <label>Choose a date</label>
            <DatePicker
              onChange={this.onStartDateChange}
              value={this.state.startdate}
            />

            <DatePicker
              onChange={this.onEndDateChange}
              value={this.state.enddate}
            />
            <select
              value={this.state.endleavetype}
              onChange={this.handleEndLeaveChange}
              className="typeOfLeaveDropdown"
            >
              {/* <option value="N/A">Choose type</option> */}
              <option value="full">Full Day</option>
              <option value="half">Half Day</option>
            </select>
            {/* <input type="" */}
          </div>

          {/* <div id="noDays">
            <label>Choose No of days</label>
            <input
              type="number"
              value={this.state.noofdays}
              onChange={this.handleNoOfDaysChange}
              min={1}
            ></input>
          </div> */}

          <div className="TypeOfLeave">
            <label>Choose type of leave</label>
            <select
              required
              value={this.state.type}
              onChange={this.handleChange}
              className="typeOfLeaveDropdown"
            >
              <option value="N/A">Choose type</option>
              <option value="Sick">Sick leave</option>
              <option value="Casual">Casual leave</option>
              <option value="Paid">Paid leave</option>
            </select>

            {
              //    <div>{(this.state.type==="N/A") ? alert('Cant select this type'): `Selected leave is : ${this.state.type}`}</div>
            }
          </div>

          <div className="reason">
            <label>Reason </label>
            <input
              required
              type="text"
              value={this.state.reason}
              onChange={this.handleReasonChange}
            ></input>
          </div>

          {/* <div className="uploadDoc">
            <input
              type="file"
              name="file"
              className="uploadDocButton"
              onChange={e => {
                this.handleFile(e);
              }}
            ></input>
            <span id="warning">
              Note:Attaching document is compulsory if applied for
              <br />
              two sick leaves.
            </span>
          </div> */}

          <div className="apply">
            <button type="submit" className="applyButton">
              Apply
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLeave: (type, date, days) =>
      dispatch({
        type: "ADD_LEAVE_REQUEST",
        data: {
          id: 5,
          type: type,
          date: date.toString(),
          days: Number(days),
          status: "pending"
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(ApplyLeave);
