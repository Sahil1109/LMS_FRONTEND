const setSession=(emp_object)=>{
    sessionStorage.setItem('empid',emp_object._id)
    sessionStorage.setItem('name',emp_object.name)
    sessionStorage.setItem('role',emp_object.role)
    sessionStorage.setItem('email',emp_object.email)
}

export default setSession