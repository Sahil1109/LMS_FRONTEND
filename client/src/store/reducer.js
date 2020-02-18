const initialState = {
    data: [
        {
            id:1,
            type:'Sick',
            date:'14 Feb 2020',
            days:1,
            status:'pending'
        },
        {
            id:2,
            type:'Casual',
            date:'14 Feb 2020',
            days:2,
            status:'rejected'
        },
        {
            id:3,
            type:'Paid',
            date:'14 Feb 2020',
            days:3,
            status:'approved'
        },
        {
            id:4,
            type:'Paid',
            date:'14 Feb 2020',
            days:3,
            status:'approved'
        },
        {
            id:5,
            type:'Paid',
            date:'14 Feb 2020',
            days:3,
            status:'approved'
        }
    ],
    leaves: [
        {
            type:'Sick',
            available:7,
            taken:2,
            total:10
        },
        {
            type:'Casual',
            available:7,
            taken:3,
            total:10
        },
        {
            type:'Paid',
            available:14,
            taken:1,
            total:15
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_LEAVE_REQUEST':
            let currData = state.data
            let currLeaves = state.leaves

            for(let index in state.leaves) {
                if(state.leaves[index].available < action.data.days) {
                    return state;
                }
            }
            currData = currData.concat(action.data)
            return {
                data: currData,
                leaves: currLeaves.map((item, index) => {
                    if(item.available >= action.data.days && item.type === action.data.type) {
                        return {
                            ...item,
                            available: item.available - action.data.days,
                            taken: item.taken + action.data.days
                        }
                    }
                    return item
                })
            }
        default:
            return state
    }
};

export default rootReducer