import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType, PropsWithChildren } from "react";
import { Route } from "react-router-dom";
import Loader from "../components/common/Loader";

export const ProtectedRoute = (
    props: PropsWithChildren<{ [key: string]: any }>
) => {
    const { children, ...args } = props;
    return (
        <Route
            component={withAuthenticationRequired(children as ComponentType, {
                onRedirecting: () => <Loader />,
            })}
            {...args}
        />
    );
};

export default ProtectedRoute;
