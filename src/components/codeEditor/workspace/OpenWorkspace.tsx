import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import { useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import readFiles from "../../../store/thunks/readFiles/readFiles";
import { commonColors } from "../../../theme/colors";

const useStyles = makeStyles({
    button: {
        color: commonColors.white,
    },
    input: {
        display: "none",
    },
});

const OpenWorkpace = () => {
    const classes = useStyles();
    const directoryInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        directoryInputRef.current?.click();
    };
    const onFilesUploaded = async () => {
        const files = directoryInputRef.current?.files as FileList;
        try {
            await dispatch(readFiles(files));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Button className={classes.button} onClick={onClickHandler}>
                Open Workspace
            </Button>
            <input
                type="file"
                className={classes.input}
                directory=""
                webkitdirectory=""
                onChange={onFilesUploaded}
                ref={directoryInputRef}
            ></input>
        </div>
    );
};
declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        directory?: string;
        webkitdirectory?: string;
    }
}

export default OpenWorkpace;
