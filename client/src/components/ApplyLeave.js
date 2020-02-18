import React, { Component } from "react";
import Date from "./Date";
// import TypeOfLeave from './TypeOfLeave'
import "../styles/ApplyLeave.css";
import DatePicker from "react-date-picker";
<<<<<<< HEAD
import { connect } from 'react-redux'

=======
import emailNotify from '../handlers/emailNotify'
>>>>>>> 133e3e42903717d801369deb29c72b1fb2dd31ec

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
    event.preventDefault();
    let appliedDate = this.state.date.toUTCString()
    appliedDate = appliedDate.split(' ').slice(1, 4).join(' ');
    this.props.addLeave(this.state.type, appliedDate, this.state.noofdays);
    alert("You Have Successfully Applied for a leave");

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
            <button
              type="submit"
              className="applyButton"
            >
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
    addLeave: (type, date, days) => dispatch({
      type: 'ADD_LEAVE_REQUEST',
      data: {
        id: 5,
        type: type,
        date: date.toString(),
        days: Number(days),
        status: 'pending'
      },
    }),
  }
}

export default connect(null, mapDispatchToProps)(ApplyLeave);
