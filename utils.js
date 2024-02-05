import {fileURLToPath} from "node:url";
import {argv, stdout, cwd} from 'node:process';
import {dirname} from "node:path";

export const separateDataIn = (data) => {
    if (data.toString().split('\n')[0].startsWith('cd')) {
        return 'cd';
    } else if (data.toString().split('\n')[0].startsWith('add')) {
        return 'add';
    } else if (data.toString().split('\n')[0].startsWith('cat')) {
        return 'cat'
    } else if (data.toString().split('\n')[0].startsWith('rn')) {
        return 'rn'
    } else if (data.toString().split('\n')[0].startsWith('cp')) {
        return 'cp'
    } else if (data.toString().split('\n')[0].startsWith('mv')) {
        return 'mv'
    }
    else if (data.toString().split('\n')[0].startsWith('rm')) {
        return 'rm'
    } else {
        return data.toString().split('\n')[0]
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
