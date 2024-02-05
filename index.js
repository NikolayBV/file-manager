import {stdin, chdir, stdout} from 'node:process';
import {join} from 'node:path'
import {errorLogs, getWorkDirectory, getCurrentDirectory, getUserName, separateDataIn, welcomeLogs} from "./utils.js";
import {exitFromApp} from "./exit.js";
import {filesList} from "./filesList.js";
import {up} from "./up.js";
import {cd} from "./cd.js";
import {cat} from "./cat.js";
import {add} from "./add.js";
import {rn} from "./rn.js";
import {copy} from "./cp.js";
import {remove} from "./rm.js";

const onAppStarted = async () => {
    const userName = getUserName();
    if (userName) {
        welcomeLogs(userName)
        stdin.on('data',  (data) => {
            switch (separateDataIn(data)) {
                case '.exit':
                    exitFromApp(userName)
                    break;
                case 'ls':
                    filesList().then(() => stdout.write(getCurrentDirectory() + '\n'))
                    break;
                case 'cd':
                    cd(data.toString().split('\n')[0].split(' ')[1])
                    break;
                case 'up':
                    up()
                    break;
                case 'cat':
                    cat(data.toString().split('\n')[0].split(' ')[1])
                    break;
                case 'add':
                    add(data.toString().split('\n')[0].split(' ')[1])
                    break;
                case 'rn':
                    rn(data.toString().split('\n')[0].split(' ')[1], data.toString().split('\n')[0].split(' ')[2])
                    break;
                case 'cp':
                    copy(data.toString().split('\n')[0].split(' ')[1], data.toString().split('\n')[0].split(' ')[2])
                    break;
                case 'mv':
                    copy(data.toString().split('\n')[0].split(' ')[1], data.toString().split('\n')[0].split(' ')[2], true)
                    break;
                case 'rm':
                    remove(data.toString().split('\n')[0].split(' ')[1])
                    break;
                default:
                    errorLogs()
            }

        })
        process.on('SIGINT', (data) => {
            exitFromApp(userName)
        })
    } else {
        console.log('Invalid input')
    }
};

await onAppStarted();
