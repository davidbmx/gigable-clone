import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../actions/tags';
import { RootState } from '../../reducers/index';

const SELECT_INDUSTRY = [
    'Select a industry',
    'Corporate',
    'Delivery & Logistic',
    'Construction & Household',
    'Creative, Digital & Tech',
    'Education',
    'Event Management',
    'Health, Fitness & Personal',
    'Hospitality',
    'Retail',
];


const mapStateToProps = (state: RootState) => state.tags;
const mapDispatchToProps = {
    getTagsByIndustry: actions.getTagsByIndustry
};

const connector = connect(mapStateToProps,mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>

const SearchBar = ({ current, getTagsByIndustry }: PropsFromRedux) => {
    const [text, setText] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [job, setJob] = useState<string>('');

    const renderOptions = () => SELECT_INDUSTRY.map((item, index) => (
        <option key={index} value={index + 1}>{item}</option>
    ));

    const renderOptionsJobType = () => current.map((item: any) => (
        <option key={item.id} value={item.id}>{item.name}</option>
    ));

    return (
        <div className="columns is-desktop search-bar">
            <div className="column">
                <div className="control is-expanded has-icons-left">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search by gig description"
                        value={text}
                        onChange={(ev) => setText(ev.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div className="column">
                <div className="field is-grouped">
                    <div className="control is-flex control-or">
                        <label className="label">or</label>
                    </div>
                    <div className="control is-expanded">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={industry} onChange={(ev) => {
                                    setIndustry(ev.target.value);
                                    getTagsByIndustry(+ev.target.value)
                                }}>
                                    { renderOptions() }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="control is-expanded">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={job} onChange={(ev) => setJob(ev.target.value)}>
                                    <option value="">Select a job type</option>
                                    { renderOptionsJobType() }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="control">
                        <button className="button is-link">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connector(SearchBar);
