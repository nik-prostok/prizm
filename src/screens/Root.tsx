import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreenUnit from './Unit/View';

const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/unit" component={ScreenUnit} />
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
