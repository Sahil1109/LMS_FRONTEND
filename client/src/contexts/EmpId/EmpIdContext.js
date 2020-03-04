import React,{useState,createContext}from 'react'


export const EmpIdContext=new createContext()

export const EmpIdProvider=(props)=>{
    let val=sessionStorage.getItem('empid')===null?null:JSON.parse(sessionStorage.getItem('empid'))
    let [empid,setEmpid]=useState(val)

    return (
        <EmpIdContext.Provider value={[empid,setEmpid]}>
            {props.children}
        </EmpIdContext.Provider>
    )
}
