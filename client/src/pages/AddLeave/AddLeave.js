import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import {useFormState} from 'react-use-form-state'
import './AddLeave.css'

function AddLeave() {
  let fileUpload
  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  const [formState,{select,text}]=useFormState({
    leaveType:'Casual',
    hf:'Half'
  })


  const getStringVal=(date)=>{
    var months    = ['January','February','March','April','May','June','July',
    'August','September','October','November','December'];
    let stringVal=date.getFullYear().toString()+' '+
                months[date.getMonth()]+' '+date.getDate().toString()
    return stringVal

  }
  
  
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      
      let startDateS=getStringVal(startDate)
      let endDateS=getStringVal(endDate)
      let hf=formState.values.hf
      let leaveType=formState.values.leaveType
      let ss=startDate.getTime()/1000
      let es=endDate.getTime()/1000
      let noOfDays=Math.ceil((es-ss) / (3600*24))+1
      noOfDays=hf==='Half'?(noOfDays-0.5):noOfDays
      console.log('noofdays',noOfDays)
      console.log('file:',fileUpload.files[0])
      e.target.reset()
  }

  return (
    <div id="addLeave">
      <form onSubmit={handleSubmit}>

        <div className="field-group date-cont">
          <label>Leave dates</label>
          <DatePicker className="datep" onChange={(date)=>{setStartDate(date);setEndDate(date)}} value={startDate} format='dd.MM.yy' minDate={new Date()} />
          <DatePicker className="datep" onChange={(date)=>setEndDate(date)} value={endDate} format='dd.MM.yy' minDate={startDate} />
          <select {...select('hf')}>
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>
        </div>

        <div className="field-group">
          <label>Leave Type:</label>
          <select {...select('leaveType')}>
            <option value="casual">Casual</option>
            <option value="sick">Sick</option>
          </select>
        </div>

        <div className="field-group">
          <label>Leave Description</label>
          <textarea {...text('description')}></textarea>
        </div>

        <div className="field-group">
          <label> </label>
          <span id="warning">Note: Attaching documents compulsory if<br/>
                            applying for more than 2 days sick leave</span>
                            <input 
                              type='file' label='Upload' 
                              className="fileU"
                              ref={(ref) =>fileUpload = ref}
                            />

        </div>

        <div className="field-group submit" style={{textAlign:'center'}}>
          <button type="submit">ApplyLeave</button>
          <button type="submit">Cancel</button>
        </div>

        
        
        
      </form>
    </div>
  );
}

export default AddLeave;
