import {stdin, stdout} from 'node:process';
import {errorLogs, getCurrentDirectory, getUserName, separateDataIn, welcomeLogs} from "./src/utils.js";
import {exitFromApp} from "./src/common/exit.js";
import {filesList} from "./src/navigation/filesList.js";
import {up} from "./src/navigation/up.js";
import {cd} from "./src/navigation/cd.js";
import {cat} from "./src/filesOperations/cat.js";
import {add} from "./src/filesOperations/add.js";
import {rn} from "./src/filesOperations/rn.js";
import {copy} from "./src/filesOperations/cp.js";
import {remove} from "./src/filesOperations/rm.js";
import {operationSystem} from "./src/os/os.js";
import {calcHash} from "./src/hash/calcHash.js";
import {compress} from "./src/zip/compress.js";
import {decompress} from "./src/zip/decompress.js";

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
                case 'os':
                    operationSystem(data.toString().split('\n')[0].split(' ')[1])
                    break;
                case 'hash':
                    calcHash(data.toString().split('\n')[0].split(' ')[1])
                    break;
                case 'compress':
                    compress(data.toString().split('\n')[0].split(' ')[1], data.toString().split('\n')[0].split(' ')[2])
                    break;
                case 'decompress':
                    decompress(data.toString().split('\n')[0].split(' ')[1], data.toString().split('\n')[0].split(' ')[2])
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
