import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ScreenAllUnits from '../Product/Product.List';
import ScreenUnit from '../Product/Product.View';

import LoginAuth from '../../components/Auth/LoginAuth';
import ProtectedRoute, {ProtectedRouteProps} from "../../components/Auth/ProtectedRoute";
import {Navbar} from "../Navbar";

const isAuth = () => {
    if (JSON.parse(localStorage.getItem("token") as string)) return true;
    else return false;
}

const RootRouter = () => {

    const defaultProtectedRouteProps: ProtectedRouteProps = {
        isAuthenticated: true,
        authenticationPath: '/login',
    };

    console.log(isAuth());

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginAuth}/>
                <ProtectedRoute
                    {...defaultProtectedRouteProps}
                    path="/product/:unitNumber"
                    component={ScreenUnit}/>
                <ProtectedRoute
                    exact={true}
                    {...defaultProtectedRouteProps}
                    path={'/products'}
                    component={ScreenAllUnits}
                />
                <Route path={'/navbar'} component={Navbar} />
            </Switch>
        </BrowserRouter>
    )
};

export default RootRouter;
