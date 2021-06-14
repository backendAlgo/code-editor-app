import { RootState } from "../../store";
import UserFile from "../../../types/UserFile";
import selectActiveFiles from "./selectActiveFiles";

test("should return only the active files", () => {
    const userFiles: UserFile[] = [
        {
            id: "1",
            name: "index.js",
            relativePath: "test/index.js",
            code: "hello world",
            extension: ".js",
        },
        {
            id: "2",
            name: "index.js",
            relativePath: "test/index.js",
            code: "hello world",
            extension: ".js",
        },
        {
            id: "3",
            name: "index.js",
            relativePath: "test/index.js",
            code: "hello world",
            extension: ".js",
        },
    ];
    const activeFiles = ["1", "3"];
    const state = {
        files: {
            userFiles,
            activeFiles,
        },
    } as RootState;
    const expectedResult = [
        {
            id: "1",
            name: "index.js",
            relativePath: "test/index.js",
            code: "hello world",
            extension: ".js",
        },
        {
            id: "3",
            name: "index.js",
            relativePath: "test/index.js",
            code: "hello world",
            extension: ".js",
        },
    ];
    expect(selectActiveFiles(state)).toEqual(expectedResult);
});
