import {createHash} from "crypto";
import path from "path";
import {createReadStream} from "fs";
import {stdout} from "node:process";
import {getCurrentDirectory, getWorkDirectory} from "./utils.js";

export const calcHash = async (filePath) => {
    const hash = createHash("sha256");
    const input = createReadStream(
        path.join(getWorkDirectory(), filePath)
    );

    input.pipe(hash).setEncoding("hex").pipe(stdout)
    stdout.write(getCurrentDirectory() + '\n')
    stdout.write('Enter your command...\n')
}
