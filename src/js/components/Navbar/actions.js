import axios from 'axios';
import { types } from '../../types/types';

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        dispatch({ type: types.SET_UNAUTHENTICATED });
        window.location.href = '/';
    }
}