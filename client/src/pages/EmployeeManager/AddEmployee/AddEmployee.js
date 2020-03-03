import React from "react";
import "./AddEmployee.css";
import DatePicker from "react-date-picker";
import { useFormState } from "react-use-form-state";
export default function AddEmployee({ onSubmit }) {
  const [formState, { text, email, password, select }] = useFormState({
    role: "N/A",
    status: "N/A",
    gender: "N/A"
  });

  function handleSubmit(e) {
    // ..
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First name<span id="mandatory">*</span>
          </label>
          <input
            {...text({
              name: "firstName",
              onChange: e => console.log("first name changes")
            })}
            required
            minLength="4"
          />

          <label>Middle name</label>
          <input {...text("middleName")} />
          <label>
            Last name <span id="mandatory">*</span>
          </label>
          <input {...text("lastName")} required />
        </div>
        <div>
          <label>
            Email<span id="mandatory">*</span>
          </label>
          <input {...email("email")} required />

          <label>
            Employee Id<span id="mandatory">*</span>
          </label>
          <input {...text("empId")} required />
        </div>
        <div>
          <label>
            Status<span id="mandatory">*</span>
          </label>
          <select {...select("status")} required>
            <option value="N/A">Choose type</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <label>
            Date of joining<span id="mandatory">*</span>
          </label>
          <DatePicker />
        </div>
        <div>
          <label>
            Role<span id="mandatory">*</span>
          </label>
          <select {...select("role")} required>
            <option value="N/A">Choose type</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          <label>
            Approver<span id="mandatory">*</span>
          </label>
          <input {...text("approver")} required />

          <label>
            Gender<span id="mandatory">*</span>
          </label>
          <select {...select("gender")} required>
            <option value="N/A">Choose type</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>
            Password<span id="mandatory">*</span>
          </label>
          <input {...password("passowrd")} required />

          <label>
            Confirm password<span id="mandatory">*</span>
          </label>
          <input {...password("confirmPassowrd")} required />
        </div>
        <div>
          {/* <input type="submit" /> */}
          <button id="saveBtn" type="submit">
            Save
          </button>
          {/* <button id="cancelBtn">Cancel</button> */}
        </div>
      </form>
    </div>
  );
}
