import { createReadStream, createWriteStream } from "node:fs";
import {rm} from 'node:fs/promises'
import {join, basename} from "node:path";
import {stdout} from "node:process";
import {getCurrentDirectory, getWorkDirectory} from "../utils.js";

export const copy = async (sourcePath, destinationDir, isRemove = false) => {
    try {
        const sourceFileName = basename(sourcePath);
        const destinationPath = join(destinationDir || getWorkDirectory(), sourceFileName);

        const readStream = createReadStream(sourcePath);
        const writeStream = createWriteStream(destinationPath);

        readStream.on('error', (err) => {
            console.log('Operation failed')
        });

        writeStream.on('error', (err) => {
            console.log('Operation failed')
        });

        readStream.pipe(writeStream);

        readStream.on('end', async () => {
            if (isRemove) {
                await rm(sourcePath)
            }
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
        });
    } catch (e) {
        console.log('Operation failed')
    }
}
