import {getCurrentDirectory} from "../utils.js";
import {join} from "node:path";
import {stat} from "node:fs/promises";
import {chdir, stdout} from "node:process";

export const cd = async (fileName) => {
    try {
        const fileStat = await stat(fileName);
        if (fileStat.isDirectory()) {
            const currentDirectory = getCurrentDirectory();
            const nextDirectory = join(currentDirectory, fileName);
            await chdir(nextDirectory);
            stdout.write(getCurrentDirectory() + '\n');
        } else {
            stdout.write('Is not directory\n')
        }
    } catch (e) {
        console.log('Invalid input')
    }
}
