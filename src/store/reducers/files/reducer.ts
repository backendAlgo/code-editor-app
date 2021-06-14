import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserFile from "../../../types/UserFile";

export interface FilesState {
    userFiles: UserFile[];
    activeFiles: string[];
    editorActiveFile: string | null;
}

export const initialState: FilesState = {
    userFiles: [],
    activeFiles: [],
    editorActiveFile: null,
};

const fileSlice = createSlice({
    name: "files",
    initialState,
    reducers: {
        setFiles(state, action: PayloadAction<UserFile[]>) {
            state.userFiles = action.payload;
            state.activeFiles = [];
        },
        addActiveFile(state, action: PayloadAction<string>) {
            state.activeFiles.push(action.payload);
        },
        removeActiveFile(state, action: PayloadAction<string>) {
            state.activeFiles = state.activeFiles.filter(
                (id) => id !== action.payload
            );
        },
        updateFileCode(
            state,
            action: PayloadAction<{ fileId: string; newCode: string }>
        ) {
            const { fileId, newCode } = action.payload;
            const userFiles = state.userFiles;
            let userFile = userFiles.find((file) => fileId === file.id);
            if (userFile) {
                userFile.code = newCode;
            }
        },
        setEditorActiveFile(state, action: PayloadAction<string | null>) {
            state.editorActiveFile = action.payload;
        },
    },
});

export const {
    setFiles,
    addActiveFile,
    removeActiveFile,
    updateFileCode,
    setEditorActiveFile,
} = fileSlice.actions;
const filesReducer = fileSlice.reducer;
export default filesReducer;
