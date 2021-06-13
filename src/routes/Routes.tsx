import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import Loader from "../components/common/Loader";
import { Header } from "../components/common/Header/Header";

const useStyles = makeStyles(() => ({
    main: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    page: {
        height: "100%",
    },
}));

const Routes = () => {
    const classes = useStyles();
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className={classes.main}>
            <Header />
            <div className={classes.page}>
                <Switch>
                    <ProtectedRoute
                        exact
                        path={routes.codeEditor}
                        component={<div>Code Editor</div>}
                    ></ProtectedRoute>
                    <Route exact path={routes.home}>
                        {isAuthenticated ? (
                            <Redirect to={routes.codeEditor} />
                        ) : (
                            <div>Home</div>
                        )}
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Routes;
