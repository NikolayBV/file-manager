import {cpus, EOL, homedir, userInfo, arch} from 'node:os'
import {stdout} from "node:process";
import {getCurrentDirectory} from "./utils.js";

export const operationSystem = (arg) => {
    switch (arg) {
        case '--EOL':
            stdout.write(EOL + '\n')
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
            break;
        case '--cpus':
            const cpu = cpus().map((cp) => ({
                model: cp.model,
                speed: cp.speed / 1000,
            }));
            stdout.write(`Total amount: ${cpu.length.toString()}\n`)
            console.table(cpu)
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
            break;
        case '--homedir':
            stdout.write(homedir() + '\n')
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
            break
        case '--username':
            stdout.write(userInfo().username + '\n')
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
            break
        case '--architecture':
            stdout.write(arch() + '\n')
            stdout.write(getCurrentDirectory() + '\n')
            stdout.write('Enter your command...\n')
            break
        default:
            stdout.write('Invalid output')
            break
    }
}
