import React,{useState,createContext} from 'react'


export const EmployeeContext=new createContext();

export const EmployeeProvider=(props)=>{
    let obj=sessionStorage.getItem('empinfo')===null?undefined:JSON.parse(sessionStorage.getItem('empinfo'))
    let [empInfo,setEmpInfo]=useState(undefined)
    
    return (
        <EmployeeContext.Provider value={[empInfo,setEmpInfo]}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

