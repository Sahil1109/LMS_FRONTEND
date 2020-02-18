import React, { Component } from "react";
import Date from "./Date";
// import TypeOfLeave from './TypeOfLeave'
import "../styles/ApplyLeave.css";
import DatePicker from "react-date-picker";
import emailNotify from '../handlers/emailNotify'

class ApplyLeave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().parse,
      noofdays: 1,
      reason: "",
      file: null,
      type: ""
    };
  }
  handleChange = event => {
    this.setState({
      type: event.target.value
    });
  };

  onDateChange = date => this.setState({ date });

  handleNoOfDaysChange = event => {
    this.setState({
      noofdays: event.target.value
    });
  };

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
    // alert(
    //   `Date is ${this.state.date} No of days is ${this.state.noofdays} Your type of leave is ${this.state.type}, Your reason is: ${this.state.reason} & Your ${this.state.file.name} is uploaded.`
    // );
    event.preventDefault();
    emailNotify(this.state.date,this.state.noofdays,this.state.type,this.state.reason)
    event.target.reset();
  };

  render() {
    return (
      <div className="applyLeave">
        <form onSubmit={this.onSubmitButton}>
          <div id="dateP">
            <label>Choose a date</label>
            <DatePicker onChange={this.onDateChange} value={this.state.date} />
          </div>

          <div id="noDays">
            <label>Choose No of days</label>
            <input
              type="number"
              value={this.state.noofdays}
              onChange={this.handleNoOfDaysChange}
              min={1}
            ></input>
          </div>

         
            <div className="TypeOfLeave">
              <label>Choose type of leave</label>
              <select
                value={this.state.type}
                onChange={this.handleChange}
                className="typeOfLeaveDropdown"
              >
                <option value="N/A">Choose type</option>
                <option value="Sick">Sick leave</option>
                <option value="Casual">Maternal leave</option>
                <option value="Paid">Casual leave</option>
              </select>

              {
                //    <div>{(this.state.type==="N/A") ? alert('Cant select this type'): `Selected leave is : ${this.state.type}`}</div>
              }
            </div>
          

          <div className="reason">
            <label>Reason </label>
            <input
              type="text"
              value={this.state.reason}
              onChange={this.handleReasonChange}
            ></input>
          </div>

          <div className="uploadDoc">
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
          </div>

          <div className="apply">
            <button
              type="submit"
              className="applyButton"
              onClick={e => this.handleUpload(e)}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ApplyLeave;
