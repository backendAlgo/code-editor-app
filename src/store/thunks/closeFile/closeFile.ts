import { RootState } from "./../../store";
import { Dispatch } from "@reduxjs/toolkit";
import {
    removeActiveFile,
    setEditorActiveFile,
} from "../../reducers/files/reducer";

const getNewActiveFile = (
    activeFilesIds: string[],
    activeFilesLength: number,
    fileId: string
) => {
    const toBeRemovedFileIndex = activeFilesIds.indexOf(fileId);
    return toBeRemovedFileIndex + 1 === activeFilesLength
        ? toBeRemovedFileIndex - 1
        : toBeRemovedFileIndex + 1;
};

const closeFile =
    (fileId: string) => (dipatch: Dispatch, getState: () => RootState) => {
        const state = getState();
        const { activeFiles, editorActiveFile } = state.files;
        const len = activeFiles.length;
        if (len >= 2) {
            if (editorActiveFile === fileId) {
                const newActiveFileId =
                    activeFiles[getNewActiveFile(activeFiles, len, fileId)];
                dipatch(setEditorActiveFile(newActiveFileId));
            }
        } else {
            dipatch(setEditorActiveFile(null));
        }
        dipatch(removeActiveFile(fileId));
    };
export default closeFile;
