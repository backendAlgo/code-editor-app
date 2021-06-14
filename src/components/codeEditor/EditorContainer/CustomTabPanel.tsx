import { makeStyles } from "@material-ui/core";
import React from "react";
import UserFile from "../../../types/UserFile";
import CustomMonokaEditor from "./CustomMonakoEditor";
interface Props {
    activeFile: UserFile;
    editorActiveFile: string | null;
}

const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
    },
}));

const CustomTabPanel = (props: Props) => {
    const classes = useStyles();
    const { activeFile, editorActiveFile } = props;
    const { id: activeFileId } = activeFile;
    return (
        <div
            className={classes.root}
            role="tabpanel"
            hidden={activeFileId !== editorActiveFile}
        >
            <CustomMonokaEditor activeFile={activeFile} />
        </div>
    );
};

export default CustomTabPanel;
