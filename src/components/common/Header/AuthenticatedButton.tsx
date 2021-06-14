import { makeStyles } from "@material-ui/core";
import React from "react";
import LogOut from "../../../auth/LogOut";

const useStyles = makeStyles(() => ({
    main: {
        display: "flex",
    },
}));

const AuthenticatedButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div>Open WorkSpace</div>
            <LogOut />
        </div>
    );
};

export default AuthenticatedButton;
