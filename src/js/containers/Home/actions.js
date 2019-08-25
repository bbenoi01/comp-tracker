import axios from 'axios';
import { types } from '../../types/types';

export const updateMetrics = (userMetrics) => (dispatch) => {
    axios.post('/metrics/user', userMetrics)
        .then(res => {
            alert('Metrics updated');
            dispatch(getUserMetrics());
        })
        .catch(err => console.log(err));
}

export const getUserMetrics = () => (dispatch) => {
    dispatch({ type: types.LOADING_USER });
    axios.get('/user')
        .then(res => {
            dispatch({
                type: types.SET_METRICS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const updateMetricsState = (metric) => {
    return {
        type: types.EDIT_METRIC,
        payload: metric
    }
}

export const updateAccState = (metric) => {
    return {
        type: types.EDIT_ACC,
        payload: metric
    }
}