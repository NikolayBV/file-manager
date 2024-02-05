import {access, rm} from "node:fs/promises";
import {constants} from "node:fs";
import {stdout} from "node:process";
import {getCurrentDirectory} from "../utils.js";

export const remove = async (fileName) => {
    try {
        await access(fileName, constants.F_OK)
        await rm(fileName)
        stdout.write(getCurrentDirectory() + '\n')
        stdout.write('Enter your command...\n')
    } catch (e) {
        throw new Error('FS operation failed')
    }
}
