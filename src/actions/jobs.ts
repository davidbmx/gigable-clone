import axios from 'axios';
import { Dispatch } from 'redux';

import { RootState } from '../reducers/index';

import {
    ActionsJobs
} from '../reducers/interfaces';

import { LOADED_JOBS, REQUEST_JOBS } from '../constants/actionTypes';


const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as any;

export const getJobs = () => async (dispatch: Dispatch<ActionsJobs>, getState: () => RootState) => {
    dispatch({ type: REQUEST_JOBS });
    try {
        const response = await axios.get(API_ENDPOINT);
        const { data } = response;
        dispatch({
            type: LOADED_JOBS,
            payload: {
                jobs: data.items,
                count: data.totalItems,
                currentPage: data.page,
                totalPages: data.numberOfPages,
                request: false
            }
        })
    } catch(err) {
        console.log(err);
    }
}