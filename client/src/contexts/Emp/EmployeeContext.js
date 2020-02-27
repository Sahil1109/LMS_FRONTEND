import React,{useState,createContext} from 'react'


export const EmployeeContext=new createContext();

export const EmployeeProvider=(props)=>{
    let [empInfo,setEmpInfo]=useState(null)

    return (
        <EmployeeContext.Provider value={[empInfo,setEmpInfo]}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

