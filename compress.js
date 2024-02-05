import {createBrotliCompress} from "zlib";
import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {join} from "path";
import {getCurrentDirectory, getWorkDirectory} from "./utils.js";
import {stdout} from "node:process";

export const compress = async (file, destination) => {

    await pipeline(
        createReadStream(join(getWorkDirectory(), file)),
        createBrotliCompress(),
        createWriteStream(join(getWorkDirectory(), destination))
    );
    stdout.write(getCurrentDirectory() + '\n')
    stdout.write('Enter your command...\n')
}
