import axios from 'axios';
import { Dispatch } from 'redux';

import { RootState } from '../reducers/index';

import { ActionsJobs } from '../reducers/interfaces';
import { LOADED_JOBS, REQUEST_JOBS, LOADED_JOB_DETAIL } from '../constants/actionTypes';


const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as any;

export const getJobs = (page: number) => async (dispatch: Dispatch<ActionsJobs>, getState: () => RootState) => {
    dispatch({ type: REQUEST_JOBS, payload: null });
    try {
        const response = await axios.get(`${API_ENDPOINT}/helpers/gigs?page=${page}`);
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

export const getJob = (jobId: number) => async (dispatch: Dispatch<ActionsJobs>, getState: () => RootState) => {
    dispatch({ type: REQUEST_JOBS, payload: null });
    try {
        const promises = [
            axios.get(`${API_ENDPOINT}/gigs/${jobId}`),
            axios.get(`${API_ENDPOINT}/gigs/${jobId}/similar`)
        ];
        const responses = await Promise.all(promises);
        dispatch({
            type: LOADED_JOB_DETAIL,
            payload: {
                jobDetail: responses[0].data,
                similar: responses[1].data,
            }
        });
    } catch(err) {
        console.log(err);
    }
}
