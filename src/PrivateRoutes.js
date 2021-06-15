import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }, props) {
    const { token } = useAuthContext();
    return (
        <Route {...rest}
            render={(props) =>
                token !== null ?
                    (
                        <Component {...rest} {...props} />
                    ) :
                    (
                        <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
                    )
            }
        />
    )
}

export default PrivateRoute;