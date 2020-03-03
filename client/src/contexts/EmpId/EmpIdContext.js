import React,{useState,createContext}from 'react'


export const EmpIdContext=new createContext()

export const EmpIdProvider=(props)=>{
    let val=sessionStorage.getItem('empid')===null?null:{
        _id:sessionStorage.getItem('empid'),
        name:sessionStorage.getItem('name'),
        role:sessionStorage.getItem('role'),
        email:sessionStorage.getItem('email')
    }
    let [empid,setEmpid]=useState(val)

    return (
        <EmpIdContext.Provider value={[empid,setEmpid]}>
            {props.children}
        </EmpIdContext.Provider>
    )
}
