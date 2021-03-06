import { useAuth0 } from "@auth0/auth0-react";
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Switch,
} from "@material-ui/core";
import React from "react";
import { toggleDarkMode } from "../../../store/reducers/dark-mode/reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import DarkModeIcon from "@material-ui/icons/Brightness2";
import UnAuthenticatedButton from "./UnAuthenticatedButton";
import AuthenticatedButton from "./AuthenticatedButton";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
    },
}));

export const Header = () => {
    const { isAuthenticated } = useAuth0();
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.darkMode);
    const onChangeDarkMode = () => {
        dispatch(toggleDarkMode());
    };
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Code Editor App
                </Typography>
                <DarkModeIcon />
                <Switch
                    onChange={onChangeDarkMode}
                    color="default"
                    checked={darkMode}
                />
                {isAuthenticated ? (
                    <AuthenticatedButton />
                ) : (
                    <UnAuthenticatedButton />
                )}
            </Toolbar>
        </AppBar>
    );
};
