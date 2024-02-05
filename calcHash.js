import {createHash} from "crypto";
import path from "path";
import {createReadStream} from "fs";
import {stat} from "node:fs/promises";
import {stdout} from "node:process";
import {getCurrentDirectory, getWorkDirectory} from "./utils.js";

export const calcHash = async (filePath) => {
    try {
        const fileStat = await stat(filePath)
        if (fileStat.isFile()) {
            const hash = createHash("sha256");
            const input = createReadStream(
                path.join(getWorkDirectory(), filePath)
            );

            input.pipe(hash).setEncoding("hex").pipe(stdout)
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
        } else {
            console.log('Invalid input')
        }
    } catch (e) {
        console.log('Invalid input')
    }
}
