import {rename} from "node:fs/promises";
import {stdout} from "node:process";
import {getCurrentDirectory} from "./utils.js";
export const rn = async (oldName, newName) => {
    try {
        await rename(oldName, newName)
        stdout.write(getCurrentDirectory() + '\n')
        stdout.write('Enter your command...\n')
    } catch (e) {
        console.log('Operation failed')
    }
}
