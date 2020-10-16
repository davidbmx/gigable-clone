import React from 'react';
import { Link } from 'react-router-dom';

const JobsItem = ({ job }: any) => {
    return (
        <div className="job-item-wrapper">
            <div className="columns is-mobile">
                <div className="column is-narrow item-image">
                    <figure className="image is-48x48">
                        <img className="is-rounded" src={job.user.avatar} alt="user-avatar" />
                    </figure>
                </div>
                <div className="column item-detail-wrappper">
                    <Link className="is-link link-title has-text-weight-bold" to={`/gigs/${job.id}`}>
                        #{job.id} - {job.tags[0].name}
                    </Link>
                    <p className="has-text-grey-light is-size-7">
                        Created by {job.user.displayname}
                    </p>
                    <p className="has-text-grey-light is-size-7 description">
                        {job.description}
                    </p>
                    <p className="is-size-7">
                        Available from November  to November 
                    </p>
                </div>
                <div className="column is-3 item-tag">
                    <span className="tag is-primary">AVAILABLE</span>
                </div>
            </div>
        </div>
    )
}

export default JobsItem;
