import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export const handlingEmail = (email) => {
    return {
        type: 'EMAIL_HANDLING',
        payload: email
    }
}

export const handlingPassword = (password) => {
    return {
        type: 'PASSWORD_HANDLING',
        payload: password
    }
}

export const handlingconfPassword = (confpassword) => {
    return {
        type: 'PASSWORDCONF_HANDLING',
        payload: confpassword
    }
}

export const handlingFullname = (fullname) => {
    return {
        type: 'FULLNAME_HANDLING',
        payload: fullname
    }
}

export const handlingPhone = (phone) => {
    return {
        type: 'PHONE_HANDLING',
        payload: phone
    }
}

export const functLogin = (email, password) => {
    data = {
        email: email,
        password: password
    }
    return {
        type: 'GET_USER',
        payload: axios.post('https://mamake-kos.herokuapp.com/api/v1/' + 'login', data)
    }
}

export const functRegister = (fullname, email, phone, password, passwordkonf) => {
    if (password.toLowerCase() == passwordkonf.toLowerCase()) {
        data = {
            fullname : fullname,
            email : email,
            phone : phone,
            password: password
        }
        return {
            type: 'POST_USER',
            payload: axios.post('https://mamake-kos.herokuapp.com/api/v1/' + 'register', data)
        }
    }
    else {
        return {
            type: 'PASSWORD_ERROR',
            payload: 'Password Tidak Sama'
        }
    }
}

export const getDataUser = () => {
    return {
        type: 'GET_DATAUSER',
        payload: AsyncStorage.getItem('dataUser')
    }
}

export const functLogout = () => {
    return {
        type: 'DELETE_DATAUSER'
    }
}

export const changeStatus = () => {
    return {
        type: 'CHANGE_STATUS'
    }
}



// http://192.168.1.31:3000/api/v1/