import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { commonColors } from "../theme/colors";

const useStyles = makeStyles(() => ({
    button: {
        color: commonColors.white,
    },
}));

export const LogOut = () => {
    const { logout } = useAuth0();
    const classes = useStyles();
    const onLogOut = () => {
        logout({
            returnTo: window.location.origin,
        });
    };
    return (
        <Button className={classes.button} onClick={onLogOut}>
            Log Out
        </Button>
    );
};

export default LogOut;
