import React, { ChangeEvent } from "react";
import { makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import selectActiveFiles from "../../../store/selectors/selectActiveFiles/selectActiveFiles";
import { setEditorActiveFile } from "../../../store/reducers/files/reducer";
import CustomTabPanel from "./CustomTabPanel";
import CustomTabLabel from "./CustomTabLabel";
const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        height: "100%",
        overflow: "hidden",
    },
    emptyMessage: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        color: theme.font,
    },
}));

const EditorContainer = () => {
    const classes = useStyles();
    const activeFiles = useAppSelector(selectActiveFiles);
    const activeFilesIds = useAppSelector((state) => state.files.activeFiles);
    const editorActiveFile = useAppSelector(
        (state) => state.files.editorActiveFile
    );
    const dispatch = useAppDispatch();
    if (!activeFiles.length) {
        return <div className={classes.emptyMessage}>Select a file</div>;
    }

    const onTabClickHandler = (event: ChangeEvent<{}>, tabPosition: number) => {
        const activeFileId = activeFilesIds[tabPosition];
        if (activeFileId !== editorActiveFile) {
            dispatch(setEditorActiveFile(activeFileId));
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    textColor="primary"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    value={
                        editorActiveFile
                            ? activeFilesIds.indexOf(editorActiveFile)
                            : 0
                    }
                    onChange={onTabClickHandler}
                >
                    {activeFiles.map((activeFile) => (
                        <Tab
                            key={activeFile.id}
                            label={<CustomTabLabel activeFile={activeFile} />}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {activeFiles.map((activeFile) => {
                return (
                    <CustomTabPanel
                        key={activeFile.id}
                        activeFile={activeFile}
                        editorActiveFile={editorActiveFile}
                    />
                );
            })}
        </div>
    );
};

export default EditorContainer;
