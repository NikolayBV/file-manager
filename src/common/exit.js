import {exit, stdout} from 'node:process';

export const exitFromApp = (userName) => {
    stdout.write(`\nThank you for using File Manager, ${userName}, goodbye!\n`)
    exit(0)
}
