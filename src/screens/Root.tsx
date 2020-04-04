import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ScreensStepList from './Steps/List';

const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/steps/list" component={ScreensStepList}/>
            {/*<Route path="/user/create" component={ScreensUserForm} />
            <Route path="/user/:id" component={ScreensUserForm} />*/}
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
