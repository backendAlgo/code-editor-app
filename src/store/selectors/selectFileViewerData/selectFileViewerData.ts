import { RootState } from "./../../store";
import { createSelector } from "@reduxjs/toolkit";
import FileViewerStructure from "../../../types/FileViewerStructure";
import UserFile from "../../../types/UserFile";

const selectFileViewerData = (userFiles: UserFile[]): FileViewerStructure => {
    if (!userFiles.length) {
        return {} as FileViewerStructure;
    }
    let result: FileViewerStructure = {
        id: "0",
        name: userFiles[0].relativePath.substring(
            0,
            userFiles[0].relativePath.indexOf("/")
        ),
        children: [],
    };

    for (let userFile of userFiles) {
        const { id, name, extension, relativePath } = userFile;
        let paths = relativePath.split("/");
        let j = 1;
        let children = result.children!;
        while (paths[j] !== name) {
            let path = paths[j];
            let subFolder = children.find((child) => child.name === path);
            if (subFolder) {
                children = subFolder.children!;
            } else {
                children.push({
                    id: j.toString(),
                    name: path,
                    children: [],
                });
                children = children[children.length - 1].children!;
            }
            j++;
        }
        children.push({
            id,
            name,
            extension,
        });
    }
    return result;
};
export default createSelector(
    (state: RootState) => state.files.userFiles,
    selectFileViewerData
);
