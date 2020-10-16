import axios from 'axios';
import { Dispatch } from 'react';
import { ActionsTags } from '../reducers/interfaces';
import { RootState } from '../reducers/index';
import {
    SET_TAG,
    SET_SELECTED_TAGS
} from '../constants/actionTypes';

const ENDPOINT_BASE = process.env.REACT_APP_API_INDUSTRIES as any;

export const getTagsByIndustry = (industryId: number) => async (
    dispath: Dispatch<ActionsTags>, getState: () => RootState
) => {
    const { tags } = getState().tags;
    if (!tags[industryId]) {
        try {
            const response = await axios.get(`${ENDPOINT_BASE}/${industryId}/tags`);
            const tags_data = {...tags};
            tags_data[industryId] = response.data;
            dispath({
                type: SET_TAG,
                payload: {
                    tags_data,
                    current: tags_data[industryId]
                }
            });
        } catch (err) {
            console.log(err);
        }
        
    } else {
        dispath({
            type: SET_SELECTED_TAGS,
            payload: {
                current: [...tags[industryId]]
            }
        });
    }
}