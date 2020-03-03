const compDates=(_startDate,_endDate,half)=>{
    let startDate=new Date(_startDate)
    let endDate=new Date(_endDate)
    let sd=startDate.getDate()
    let sm=startDate.getMonth()
    let sy=startDate.getFullYear()
    let ed=endDate.getDate()
    let em=endDate.getMonth()
    let ey=endDate.getFullYear()

    if(half&& ((sd!==ed) || (sm!==em) || (sy!==ey))){
        return false;
    }else{
        return true;
    }
}

export default compDates