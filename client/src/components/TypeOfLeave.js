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
              <h3>Choose type of leave <span>
                <select value={this.state.type}
                onChange={this.handleChange} className="typeOfLeaveDropdown">
                <option value="N/A">Choose type</option>
                <option value="Sick leave">Sick leave</option>
                <option value="Maternal leave">Maternal leave</option>
                <option value="Casual leave">Casual leave</option>
                <option value="Earn leave">Earn leave</option>
                </select>
                </span></h3>
             {
               <div>{(this.state.type==="N/A") ? alert('Cant select this type'): `Selected leave is : ${this.state.type}`}</div>
             }
            </div>
        )
    }
}
export default TypeOfLeave