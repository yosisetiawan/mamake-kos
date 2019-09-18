import axios from 'axios'


export const getDorms = (param = '') => {
    let query = '';
    if (param !== '') {
        query = '?city=' + param;
    }

    return {
        type: 'GET_DORMS',
        payload: axios.get('https://mamake-kos.herokuapp.com/api/v1/' + 'dorms' + query)
    }
}

export const getDormDetail = (id) => {
    return {
        type: 'GET_DORMDETAIL',
        payload: axios.get('https://mamake-kos.herokuapp.com/api/v1/' + 'dorms/' + id)
    }
}



// http://192.168.1.31:3000/api/v1/