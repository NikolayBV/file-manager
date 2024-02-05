import {createReadStream} from 'node:fs'
import {stdout} from "node:process";
import {getCurrentDirectory} from "../utils.js";

export const cat = async (pathToFile) => {
  try {
      const stream = createReadStream(pathToFile)
      stream.on('data', (data) => {
          stdout.write(data.toString())
      })
      stream.on('end', () => {
          stdout.write(getCurrentDirectory() + '\n')
          stdout.write('Enter your command...\n')
      })
  } catch (e) {
      console.log('Operation failed')
  }
}
