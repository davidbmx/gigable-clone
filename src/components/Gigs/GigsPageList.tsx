import React, { Fragment, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getJobs } from '../../actions/jobs';
import { RootState } from '../../reducers';

import SearchBar from './SearchBar';
import JobsList from './JobsList';

const mapStateToProps = (state: RootState) => state.jobs;

const mapDispatchToProps = {
    getJobs
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


const GigsPageList = ({ jobs, getJobs, request }: PropsFromRedux) => {
    useEffect(() => {
        if (!jobs.length && !request) {
            getJobs();
        }
    });
    return (
        <Fragment>
            <h1 className="page-title">Open Gigs</h1>
            <SearchBar />
            <JobsList
                jobs={jobs}
            />
        </Fragment>
    )
}

export default connector(GigsPageList);
