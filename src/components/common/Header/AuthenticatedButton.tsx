import { makeStyles } from "@material-ui/core";
import React from "react";
import LogOut from "../../../auth/LogOut";
import OpenWorkpace from "../../codeEditor/workspace/OpenWorkspace";

const useStyles = makeStyles(() => ({
    main: {
        display: "flex",
    },
}));

const AuthenticatedButton = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <OpenWorkpace />
            <LogOut />
        </div>
    );
};

export default AuthenticatedButton;
