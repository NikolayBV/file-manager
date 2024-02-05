import {appendFile} from 'node:fs/promises'
import {stdout} from "node:process";
import {getCurrentDirectory} from "../utils.js";

export const add = async (path) => {
    try {
        await appendFile(path, '', {flag: 'ax'}).then(() => {
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
        })
    } catch (e) {
        console.log('Operation failed')
    }
}
