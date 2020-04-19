import * as React from 'react';
import {Redirect, Route, RouteProps} from 'react-router';

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = props => {

    let redirectPath = '';
    const token = JSON.parse(localStorage.getItem("token") as string);

    if (!token) {
        redirectPath = props.authenticationPath;
    }

    if (redirectPath) {
        const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
};

export default ProtectedRoute;
