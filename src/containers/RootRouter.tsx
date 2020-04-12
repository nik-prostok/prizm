import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScreenAllUnits from './Product/Product.List';
import ScreenUnit from './Product/Product.View';


const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/unit/:unitNumber" component={ScreenUnit}/>
            <Route path="/units" component={ScreenAllUnits}/>
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
