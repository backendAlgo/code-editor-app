import { makeStyles } from "@material-ui/core";
import React, { MouseEvent } from "react";
import UserFile from "../../../types/UserFile";
import ExtensionIcon from "../extentionIcon/ExtensionIcon";
import CloseIcon from "@material-ui/icons/Close";
import { useAppDispatch } from "../../../store/hooks";
import { removeActiveFile } from "../../../store/reducers/files/reducer";
import closeFile from "../../../store/thunks/closeFile/closeFile";

interface Props {
    activeFile: UserFile;
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
    },
    fileName: {
        padding: "0px 5px",
        color: theme.font,
    },
    closeIcon: {
        position: "absolute",
        right: 0,
        color: theme.font,
    },
}));

const CustomTabLabel = (props: Props) => {
    const classes = useStyles();
    const {
        activeFile: { id: fileId, name: fileName, extension },
    } = props;
    const dispatch = useAppDispatch();
    const onCloseHandler = (event: MouseEvent) => {
        event.stopPropagation();
        dispatch(closeFile(fileId));
    };
    return (
        <div className={classes.root}>
            <ExtensionIcon extension={extension} />
            <div className={classes.fileName}>{fileName}</div>
            <CloseIcon className={classes.closeIcon} onClick={onCloseHandler} />
        </div>
    );
};

export default CustomTabLabel;
