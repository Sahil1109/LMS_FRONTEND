import React, { Component } from 'react'
import Date from './Date'
import TypeOfLeave from './TypeOfLeave'
import '../styles/ApplyLeave.css'

class ApplyLeave extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             reason:'',
             file: null
        }
    }
    handleFile(e){
        let file = e.target.files[0];

        this.setState({
            file:file
        })
    }

    handleUpload(e){
        console.log(this.state,"Tehhe");
    }

    handleReasonChange =(event)=>{
        this.setState({
            reason: event.target.value
        })
    }

    onSubmitButton=(event)=>{
        alert(`Your reason is: ${this.state.reason } & Your ${this.state.file.name} is uploaded.`)
        event.preventDefault()
    }
    
    render() {
        return (
            <div className="applyLeave"> 
            <form onSubmit={this.onSubmitButton}>
            <Date></Date>
            <TypeOfLeave></TypeOfLeave>

            <div className="reason">
                <label>Reason </label>  
                <input type ="text" value={this.state.reason} onChange={this.handleReasonChange}></input>
            </div>

            <div className="uploadDoc">
            
                <input type="file" name="file" className="uploadDocButton"
                onChange={(e)=>{
                    this.handleFile(e)
                }} 
                ></input> 
                <span id="warning">Note:Attaching document is compulsory if applied for<br/>
                two sick leaves.</span>
            
            </div>

            <div className="apply">
                <button type="submit" className="applyButton" onClick={(e)=>this.handleUpload(e)} >Apply</button>
            </div>  

            </form>
        </div>
        )
    }
}

export default ApplyLeave
