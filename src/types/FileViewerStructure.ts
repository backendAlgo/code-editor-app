export default interface FileViewerStructure {
    id: string;
    name: string;
    extensin?: string;
    children?: FileViewerStructure[];
}
