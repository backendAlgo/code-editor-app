import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { commonColors } from "../theme/colors";

const useStyles = makeStyles(() => ({
    button: {
        color: commonColors.white,
    },
}));

export const LogIn = () => {
    const { loginWithRedirect } = useAuth0();
    const classes = useStyles();
    const onLogIn = () => {
        loginWithRedirect();
    };
    return (
        <Button className={classes.button} onClick={onLogIn}>
            Log In
        </Button>
    );
};

export default LogIn;
