import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
import { FilesState } from "../../reducers/files/reducer";
const selectActiveFiles = (files: FilesState) => {
    const { userFiles, activeFiles } = files;
    return userFiles.filter((file) => activeFiles.includes(file.id));
};
export default createSelector(
    (state: RootState) => state.files,
    selectActiveFiles
);
