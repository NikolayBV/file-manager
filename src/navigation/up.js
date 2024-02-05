import {getCurrentDirectory} from "../utils.js";
import {join} from "node:path";
import {chdir, cwd, stdout} from "node:process";

export const up = async () => {
    const currentDirectory = getCurrentDirectory();
    const parentDirectory = join(currentDirectory, '..');
    await chdir(parentDirectory);
    stdout.write(getCurrentDirectory() + '\n');
}
