const initialState = {
    dataDorms: [],
    isLoading: true,
    dataOwnDorms: []
}

const dorms = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DORMS':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DORMS_FULFILLED':
            return {
                ...state,
                dataDorms: action.payload.data,
                isLoading: false,
            }
        case 'GET_DORMS_REJECTED':
            return {
                ...state,
                dataDorms: action.payload.message,
                isLoading: false
            }
        case 'GET_DORMDETAIL':
            return {
                ...state,
                dataDetail: action.payload.daat,
                isLoading: false
            }
        case 'GET_DORMDETAIL_FULFILLED':
            return {
                ...state,
                dataDetail: action.payload.data,
                isLoading: false
            }
        case 'GET_DORMDETAIL_REJECTED':
            return {
                ...state,
                dataDetail: action.payload.message,
                isLoading: false
            }
        default:
            return state;
    }
}

export default dorms;