import React from 'react';
import JobsList from './JobsList';
import SearchBar from './SearchBar';

const Gigs = () =>  {
    return (
        <div className="columns page-container">
            <div className="column is-10 is-offset-1 has-mb-18">
                <h1 className="page-title">Open Gigs</h1>
                <SearchBar />
                <JobsList />
            </div>
        </div>
    )
}

export default Gigs;
