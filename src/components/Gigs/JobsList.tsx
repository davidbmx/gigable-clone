import React, { Fragment, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import JobsItem from './JobsItem';
import { getJobs } from '../../actions/jobs';
import { RootState } from '../../reducers';


const mapStateToProps = (state: RootState) => state.jobs;
const mapDispatchToProps = {
    getJobs
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const JobsList = ({ jobs, getJobs, request }: PropsFromRedux) => {
    
    useEffect(() => {
        if (!jobs.length && !request) {
            getJobs();
        }
    });
    console.log(jobs);
    return (
        <Fragment>
            {
                jobs.map(item => (
                    <JobsItem
                        key={item.id}
                        job={item}
                    />
                ))
            }
        </Fragment>
        
    )
}

export default connector(JobsList);
