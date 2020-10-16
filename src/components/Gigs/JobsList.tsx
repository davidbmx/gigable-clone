import React, { Fragment } from 'react';

import JobsItem from './JobsItem';

type Props = {
    jobs: Array<any>
}


const JobsList = ({ jobs }: Props) => {
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

export default JobsList;
