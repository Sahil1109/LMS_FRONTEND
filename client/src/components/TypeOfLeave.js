import React, { Component } from 'react'
import '../styles/TypeOfLeave.css'

class TypeOfLeave extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type: " "
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            type: event.target.value,
        })
    }
    
    render() {
        return (
            <div className="TypeOfLeave">
                <label>Choose type of leave</label> 
                <select value={this.state.type}
                onChange={this.handleChange} className="typeOfLeaveDropdown">
                    <option value="N/A">Choose type</option>
                    <option value="Sick">Sick leave</option>
                    <option value="Casual">Maternal leave</option>
                    <option value="Paid">Casual leave</option>
                </select>
               
             
               <br/><span id="sl">{(this.state.type==="N/A") ? alert('Cant select this type'): `Selected leave is : ${this.state.type}`}</span>
             
            </div>
        )
    }
}
export default TypeOfLeave