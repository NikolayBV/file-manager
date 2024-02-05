import {readdir, stat} from 'node:fs/promises';
import {getCurrentDirectory} from "../utils.js";

export const filesList = async () => {
    const dir = await readdir(getCurrentDirectory())
    const tableData = dir.map(async (name) => {
        const fileStat = await stat(name);
        return {
            Name: name,
            Type: fileStat.isFile() ? 'file' : 'directory'

        }
    })
    const data = await Promise.all(tableData);
    const sort = data.sort((a, b) => {
        if (a.Type !== b.Type) {
            return a.Type === 'directory' ? -1 : 1;
        }
        return a.Name.localeCompare(b.Name);
    })
    console.table(sort);
}
