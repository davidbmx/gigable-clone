import React, { Fragment, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

import { RootState } from '../../reducers/index';
import Loader from '../Loader';
import * as actions from '../../actions/jobs';
import MapContainer from '../../MapContainer';
import SocialButtons from '../SocialButtons';
import JobsList from './JobsList';

const mapStateToPros = (state: RootState) => state.jobs;
const mapDispatchToProps = {
    getJob: actions.getJob
}

const connector = connect(mapStateToPros, mapDispatchToProps);

type TParams = {
    jobId: string;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

const GigsPageDetail = ({ jobDetail , getJob, request, similar }: PropsFromRedux) => {
    let { jobId } = useParams<TParams>();
    useEffect(() => {
        let requestData = jobDetail ? jobDetail.id !== +jobId : true;
        if (requestData && !request) {
            getJob(+jobId);
        }
    })


    if (!jobDetail || request) {
        return <Loader />
    }
    console.log(similar);
    return (
        <Fragment>
            <nav className="breadcrumb custom-breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/gigs">Gigs</Link></li>
                    <li className="is-active"><Link to="#" aria-current="page">{jobDetail.tags[0].name}</Link></li>
                </ul>
            </nav>
            <div className="tabs custom-tabs">
                <ul>
                    <li className="is-active"><Link to="#">Details</Link></li>
                    <li><Link to="#" className="button is-rounded btn">Apply</Link></li>
                </ul>
            </div>
            <div className="job-wrapper">
                <div className="columns">
                    <div className="column is-narrow item-image">
                        <figure className="image is-96x96">
                            <img className="is-rounded" src={jobDetail.user.avatar} alt="user-avatar" />
                        </figure>
                    </div>
                    <div className="column item-detail-wrappper">
                        <h4>{jobDetail.user.displayname}</h4>
                        <h3>{jobDetail.tags[0].name}</h3>
                    </div>
                    <div className="column is-2 item-tag">
                        <span className="tag is-primary">{jobDetail.status}</span>
                        <p>
                            #{jobDetail.id}
                        </p>
                    </div>
                </div>
            </div>
            <div className="job-detail-wrapper">
                <div className="columns">
                    <div className="column category-content is-8">
                        <div className="title-category">
                            Delivery Driver Categories:
                        </div>
                        <div className="tags-list">
                            {
                                jobDetail.deliveryGig ? (
                                    jobDetail.deliveryGig.categories.map((tag: any) => (
                                        <span key={tag.id} className="tag is-info">{tag.name}</span>
                                    ))
                                ) : ''
                            }
                        </div>
                        <hr />
                        <div className="detail">
                            <p className="has-text-justified has-pre-line">
                                {jobDetail.description}
                            </p>
                        </div>
                        <div className="columns dates-wrapper">
                            <div className="field column">
                                <h4 className="dates-title">Dates</h4>
                                <div className="columns">
                                    <div className="column is-6">
                                        <div className="field">
                                            <label className="label">From</label>
                                            <div className="control">{moment(jobDetail.startDate.date).format('dddd, D MMMM YYYY') }</div>
                                        </div>
                                        <div className="field">
                                            <label className="label">To</label>
                                            <div className="control">{moment(jobDetail.endDate.date).format('dddd, D MMMM YYYY') }</div>
                                        </div>
                                    </div>
                                    <div className="column is-6">
                                        <div className="field">
                                            <label className="label">Working hours</label>
                                            <div className="control">{jobDetail.startDate.time } to {jobDetail.endDate.time}</div>
                                        </div>
                                        {
                                            jobDetail.overtime ? (
                                                <div className="className">
                                                    <div className="control">
                                                        <span className="tag is-warning">Potential to run overtime</span>
                                                    </div>
                                                </div>
                                            ): ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns dates-wrapper">
                            <div className="field column">
                                <h4 className="dates-title">Rates</h4>
                                <div className="columns">
                                    {
                                        jobDetail.costActivity ? (
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Per delivery</label>
                                                    <div className="control">{`${jobDetail.currency.symbol} ${jobDetail.costActivity}`}</div>
                                                </div>
                                            </div>
                                        ) : ''
                                    }
                                    
                                    {
                                        jobDetail.costHour ? (
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label">Per hour</label>
                                                    <div className="control">{`${jobDetail.currency.symbol} ${jobDetail.costHour}`}</div>
                                                </div>  
                                            </div>     
                                        ) : ''
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <MapContainer
                            lat={jobDetail.address.lat}
                            lng={jobDetail.address.lng}
                        />
                        <div className="mt-5">
                            <div className="field">
                                <label className="label">Pick-up location</label>
                                <div className="control">
                                    <span>{jobDetail.address.line1} {jobDetail.address.formatted_address}</span>
                                </div>
                            </div>
                            {
                                jobDetail.deliveryGig ? (
                                    <div className="field">
                                        <label className="label">Drop-off location</label>
                                        <div className="control">
                                            <span>{jobDetail.deliveryGig.address.line1} {jobDetail.deliveryGig.address.formatted_address}</span>
                                        </div>
                                    </div>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column" style={{display: 'flex'}}>
                        <SocialButtons />
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="title-more">See also</h1>
            <hr />
            <div className="">
                <div className="column">
                    <JobsList
                        jobs={similar}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default connector(GigsPageDetail);
