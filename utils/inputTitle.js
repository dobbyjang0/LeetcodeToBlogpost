import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

async function inputTitle() {
    const rl = readline.createInterface({ input, output })
    const titleSlug = await rl.question('leetcode 타이틀명 :')
    rl.close();

    return titleSlug
}

export { inputTitle };
