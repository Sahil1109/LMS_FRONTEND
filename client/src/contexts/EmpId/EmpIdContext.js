import React,{useState,createContext}from 'react'


export const EmpIdContext=new createContext()

export const EmpIdProvider=(props)=>{
    let [empid,setEmpid]=useState('007')

    return (
        <EmpIdContext.Provider value={[empid,setEmpid]}>
            {props.children}
        </EmpIdContext.Provider>
    )
}
