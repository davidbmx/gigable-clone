import React, { Fragment, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getJobs } from '../../actions/jobs';
import { RootState } from '../../reducers';

import SearchBar from './SearchBar';
import JobsList from './JobsList';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';
import Loader from '../Loader';

const mapStateToProps = (state: RootState) => state.jobs;

const mapDispatchToProps = {
    getJobs
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


const GigsPageList = ({ jobs, getJobs, request, totalPages }: PropsFromRedux) => {

    const handlePageClick = (e: any) => {
        console.log(e.selected);
        getJobs(e.selected);
    }
    useEffect(() => {
        if (!jobs.length && !request) {
            getJobs(1);
        }
    });

    if (!jobs.length) {
        return <Loader />
    }

    return (
        <Fragment>
            <Helmet>
                <title>Gigable - Future of Work - Open Gigs</title>
            </Helmet>
            <h1 className="page-title">Open Gigs</h1>
            <SearchBar />
            <JobsList
                jobs={jobs}
            />
            <div className="columns">
                <div className="column is-6">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default connector(GigsPageList);
