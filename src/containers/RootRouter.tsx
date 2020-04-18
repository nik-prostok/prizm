import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ScreenAllUnits from './Product/Product.List';
import ScreenUnit from './Product/Product.View';

import LoginAuth from '../components/Auth/Login.Auth';

const RootRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginAuth}/>
                <Route path="/product/:unitNumber" component={ScreenUnit}/>
                <Route path="/products" component={ScreenAllUnits}/>
            </Switch>
        </BrowserRouter>
    )
};

export default RootRouter;
