import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UnitItem from './Unit/View';

const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/unit" component={UnitItem}/>
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
