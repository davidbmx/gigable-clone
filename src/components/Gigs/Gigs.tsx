import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import GigsPageList from './GigsPageList';
import GigsPageDetail from './GigsPageDetail';

const Gigs = () =>  {
    let { path } = useRouteMatch();
    return (
        <div className="page-container">
            <div className="columns">
                <div className="column is-10 is-offset-1 mb-18">
                    <Switch>
                        <Route exact path={path}>
                            <GigsPageList />
                        </Route>
                        <Route path={`${path}/:jobId`}>
                            <GigsPageDetail />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
        
    )
}

export default Gigs;
