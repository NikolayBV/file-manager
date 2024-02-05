import {fileURLToPath} from "node:url";
import {argv, stdout, cwd} from 'node:process';
import {dirname} from "node:path";

export const separateDataIn = (data) => {
    const command = data.toString().split('\n')[0];
    switch (true) {
        case command.startsWith('add'):
            return 'add';
        case command.startsWith('cat'):
            return 'cat';
        case command.startsWith('rn'):
            return 'rn';
        case command.startsWith('cp'):
            return 'cp';
        case command.startsWith('mv'):
            return 'mv';
        case command.startsWith('rm'):
            return 'rm';
        case command.startsWith('os'):
            return 'os';
        case command.startsWith('hash'):
            return 'hash';
        case command.startsWith('compress'):
            return 'compress';
        case command.startsWith('decompress'):
            return 'decompress';
        default:
            return command;
    }
}

export const getWorkDirectory = () => {
    const __filename = fileURLToPath(import.meta.url)
    return dirname(__filename.toString())
}
export const getCurrentDirectory = () => {
    return cwd()
}
export const getUserName = () => {
    const userName = argv.find((arg) => arg.startsWith('--')).split('=');
    if (userName[0].slice(2) === 'username' && userName[1]) {
        return userName[1];
    } else {
        return undefined;
    }
}

export const welcomeLogs = (userName) => {
    stdout.write(`Welcome to the File Manager, ${userName}!\n`)
    stdout.write(`You are currently in ${getWorkDirectory()}\n`)
    stdout.write('Enter your command...\n')
}

export const errorLogs = () => {
    stdout.write('\nInvalid input\n')
    stdout.write(`You are currently in ${getWorkDirectory()}\n`)
    stdout.write('Enter your command...\n')
}
