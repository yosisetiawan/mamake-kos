import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
    email: '',
    password: '',
    passwordconf: '',
    fullname: '',
    phone: '',
    isLoading: false,
    berhasil: null,
    message: null,
    berhasildaftar: null,
    logout: false,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'EMAIL_HANDLING':
            return {
                ...state,
                email: action.payload
            }
        case 'PASSWORD_HANDLING':
            return {
                ...state,
                password: action.payload
            }
        case 'PASSWORDCONF_HANDLING':
            return {
                ...state,
                passwordconf: action.payload
            }
        case 'FULLNAME_HANDLING':
            return {
                ...state,
                fullname: action.payload
            }
        case 'PHONE_HANDLING':
            return {
                ...state,
                phone: action.payload
            }
        case 'GET_USER':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USER_FULFILLED':
            AsyncStorage.setItem('dataUser', JSON.stringify(action.payload.data.userData));
            AsyncStorage.setItem('token', JSON.stringify(action.payload.data.token));
            return {
                ...state,
                isLoading: false,
                berhasil: true
            }
        case 'GET_USER_REJECTED':
            return {
                ...state,
                berhasil: false
            }
        case 'GET_DATAUSER':
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_DATAUSER_FULFILLED':
            const data = JSON.parse(action.payload)
            return {
                ...state,
                fullname: data.fullname,
                email: data.email,
                phone: data.phone
            }
        case 'GET_DATAUSER_REJECTED':
            return {
                ...state,
                message: this.payload.message
            }
        case 'POST_USER':
            return {
                ...state,
                isLoading: true,
            }
        case 'POST_USER_FULFILLED':
            AsyncStorage.setItem('dataUser', JSON.stringify(action.payload.data.userData));
            AsyncStorage.setItem('token', JSON.stringify(action.payload.data.token));
            return {
                ...state,
                isLoading: false,
                berhasildaftar: true,
                logout: false
            }
        case 'POST_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                berhasil: false,
            }
        case 'PASSWORD_ERROR':
            return {
                ...state,
                isLoading: false,
                berhasil: false,
                message: action.payload
            }
        case 'DELETE_DATAUSER':
            AsyncStorage.setItem('token', '');
            AsyncStorage.setItem('dataUser', '');
            return {
                logout: true,
                message: action.payload
            }
        case 'CHANGE_STATUS':
            return {
                ...state,
                logout: false,
                message: action.payload
            }
        default:
            return state;
    }
}


export default auth;