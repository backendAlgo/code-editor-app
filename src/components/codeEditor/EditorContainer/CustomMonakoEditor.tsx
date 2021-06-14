import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import supportedExtensions from "../../../constants/supportedExtensions";
import { useAppSelector } from "../../../store/hooks";
import UserFile from "../../../types/UserFile";
import Loader from "../../common/Loader";
interface Props {
    activeFile: UserFile;
}
const CustomMonakoEditor = (props: Props) => {
    const {
        activeFile: { id: fileId, extension, code: originalCode },
    } = props;
    const language = supportedExtensions[extension];
    const darkMode = useAppSelector((state) => state.darkMode);
    const [code, setCode] = useState(originalCode);

    const onChangeHandler = (newCode = "") => {
        setCode(newCode);
    };

    return (
        <Editor
            width="100%"
            height="100%"
            language={language}
            theme={darkMode ? "vs-dark" : "vs-light"}
            value={code}
            loading={<Loader />}
            onChange={onChangeHandler}
        />
    );
};

export default CustomMonakoEditor;
