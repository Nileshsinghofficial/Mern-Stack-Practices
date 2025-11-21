#!/usr/bin/env node


import * as readline from 'node:readline/promises'
import {stdin, stdout} from 'node:process'
import fs from 'node:fs/promises'
import chalk from "chalk";
import { createFolder, createFile, writeToFile, deleteFile, deleteFolder, listItems } from './fs.js';

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
})


async function menu(){
    console.clear()

    console.log(chalk.blue.bold(`\n📁 File system manager\n`))

    const options = [
        'Create Folder',
        'Create File',
        'Write to File',
        'Delete File',
        'Delete Folder',
        'List Items',
        'Exit'
    ];

    options.forEach((opt, i) => {
        console.log(chalk.yellow(`${i+1}`) + chalk.white(` ${opt}`))
    })

    const answer = await rl.question(chalk.cyan('\nSelect option: '))
    
    switch(answer){
        case '1' :
            const folderPath = await rl.question(chalk.cyan('Folder path: '));
            createFolder(folderPath)
            console.log(chalk.green('✅ Folder created.'))
            break;
        case '2':
            const filePath = await rl.question(chalk.cyan('File Path: '))
            const intialContent = await rl.question(chalk.cyan('Intial content: '))
            await createFile(filePath, intialContent)

            console.log(chalk.green("✅ File Created." ))
            break;
        
        case '3':

            const appendFilePath = await rl.question(chalk.cyan('File path: '));
            const appendContent = await rl.question(chalk.cyan('Content: '));
            await writeToFile(appendFilePath, `\n${appendContent}`);

            console.log(chalk.green("✅ File content added."));
            break;

        case '4':
            const deleteFilePath = await rl.question(chalk.cyan('File to delete: '))
            await deleteFile(deleteFilePath)

            console.log(chalk.green("✅ File deleted."))
            break;
        
        case '5':
            const deleteFolderPath = await rl.question(chalk.cyan('Folder to delete: '))
            await deleteFolder(deleteFolderPath)

            console.log(chalk.green('✅ Folder deleted.'))
            break

        case '6':

            const listPath = await rl.question(chalk.cyan('Folder path (Enter for current): '))
            const items = await listItems(listPath || './')
            // console.log(chalk.blue('\nContents:'))

            items.forEach(item =>{
                const icon = item.type === 'folder' ? '📂' : '📄'
                console.log(`${icon} ${chalk.yellow(item.name)}`)
            })
            
            break;

        case '7':
            rl.close()
            return
            break;
        
        default :
            console.log(chalk.red(':⚠️ Invalid options.'))

    }


    await rl.question(chalk.gray('\nPress Enter to continue...'));
    menu()

}

menu()