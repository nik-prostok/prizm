import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreenAllUnits from './Unit/List';
import ScreenUnit from './Unit/View';

const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/unit" component={ScreenUnit} />
            <Route path="/units" component={ScreenAllUnits} />
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
