const initialState = {
    data: [
        {
            id:1,
            leaveType:'Sick',
            Date:'14 Feb 2020',
            Days:1,
            status:'pending'
        },
        {
            id:2,
            leaveType:'Casual',
            Date:'14 Feb 2020',
            Days:2,
            status:'rejected'
        },
        {
            id:3,
            leaveType:'Paid',
            Date:'14 Feb 2020',
            Days:3,
            status:'approved'
        },
        {
            id:4,
            leaveType:'Paid',
            Date:'14 Feb 2020',
            Days:3,
            status:'approved'
        },
        {
            id:5,
            leaveType:'Paid',
            Date:'14 Feb 2020',
            Days:3,
            status:'approved'
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LEAVE_REQUEST':
            let currData = state.data
            currData.concat(action.data)
            return {
                data: currData
            }
        default:
            return state
    }
};

export default rootReducer