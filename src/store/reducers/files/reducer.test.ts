import { PayloadAction } from "@reduxjs/toolkit";
import UserFile from "../../../types/UserFile";
import filesReducer, {
    addActiveFile,
    FilesState,
    initialState,
    removeActiveFile,
    setEditorActiveFile,
    setFiles,
    updateFileCode,
} from "./reducer";

describe("files reducer", () => {
    test("should return the initial state if no known action provided", () => {
        expect(filesReducer(undefined, {} as PayloadAction)).toEqual(
            initialState
        );
    });
    test("should set user files when action is setFiles", () => {
        const userFiles: UserFile[] = [
            {
                id: "1",
                name: "index.js",
                relativePath: "test/index.js",
                code: "console.log('hello world')",
                extension: ".js",
            },
            {
                id: "2",
                name: "main.java",
                relativePath: "java/main.js",
                code: "System.out.println('smth')",
                extension: ".java",
            },
        ];
        const expectedResult = {
            ...initialState,
            activeFiles: [],
            userFiles,
        };
        expect(filesReducer(initialState, setFiles(userFiles))).toEqual(
            expectedResult
        );
    });
    test("should add a new file id when action is addActiveFiles", () => {
        const fileId = "1";
        expect(filesReducer(initialState, addActiveFile(fileId))).toEqual({
            ...initialState,
            activeFiles: [fileId],
        });
    });
    test("shoudl remove a file id when action is removeActiveFile", () => {
        const fileId = "1";
        const modifiedInitialState = {
            ...initialState,
            activeFiles: [fileId],
        };
        const expectedState = {
            ...initialState,
            activeFiles: [],
        };
        expect(
            filesReducer(modifiedInitialState, removeActiveFile(fileId))
        ).toEqual(expectedState);
    });
    test("should update the code of a file when action is updateFileCode", () => {
        const payload = {
            fileId: "1",
            newCode: "println('working')",
        };
        const modifiedInitialState: FilesState = {
            ...initialState,
            userFiles: [
                {
                    id: "1",
                    code: "hello world",
                    name: "index.js",
                    relativePath: "test/index.js",
                    extension: "js",
                },
            ],
        };
        const expectedState: FilesState = {
            ...initialState,
            userFiles: [
                {
                    id: "1",
                    code: payload.newCode,
                    name: "index.js",
                    relativePath: "test/index.js",
                    extension: "js",
                },
            ],
        };
        expect(
            filesReducer(modifiedInitialState, updateFileCode(payload))
        ).toEqual(expectedState);
    });
    test("should not update state when updateFileCode reducer does not find a file", () => {
        const payload = {
            fileId: "2",
            newCode: "println('working')",
        };
        const modifiedInitialState: FilesState = {
            ...initialState,
            userFiles: [
                {
                    id: "1",
                    code: "hello world",
                    name: "index.js",
                    relativePath: "test/index.js",
                    extension: "js",
                },
            ],
        };
        const expectedState = modifiedInitialState;
        expect(
            filesReducer(modifiedInitialState, updateFileCode(payload))
        ).toEqual(expectedState);
    });
    test("should set the editor's active file when action setEditorActiveFile", () => {
        const fileId = "1";
        const expectedState: FilesState = {
            ...initialState,
            editorActiveFile: fileId,
        };
        expect(filesReducer(initialState, setEditorActiveFile(fileId))).toEqual(
            expectedState
        );
    });
});
