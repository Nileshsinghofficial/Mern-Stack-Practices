import * as fs from 'node:fs/promises'
import path from 'node:path'


export async function listItems(listPath = './'){
    const items = await fs.readdir(listPath, {withFileTypes : true})
    return items.map(item => {
        return {
            name: item.name,
            type: item.isDirectory() ? 'folder' : 'file',
            path: path.join(import.meta.dirname,item.name),
        }
    })
}


async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'utf-8')
    console.log('Data:', data)
}

export async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive: true})
}

export async function writeToFile(pathname, content = ''){
    await fs.appendFile(pathname, content)
    console.log('Successfuly append');
}

export async function createFile(pathname, content=''){
    await fs.writeFile(pathname, content)
}

export async function deleteFile(filepath) {
    await fs.unlink(filepath);
    console.log("File is Successfuly deleted")
}

export async function deleteFolder(folderPath) {
    await fs.rm(folderPath , {recursive: true})
}

async function getFileInfo(filepath) {
   const stats = await fs.stat(filepath)
//    console.log('Stats', stats)
    return {
        size : `${(stats.size / 1024).toFixed(2)} kb`,
        created: new Date(stats.birthtimeMs).toLocaleString(),
        modified: new Date(stats.mtimeMs).toLocaleString(),
    };
}


// readFile('./node.txt')

// createFolder('./NODE/JS')

// writeToFile('./node.txt', `each time new line use for append \n`);


// deleteFile('./hello.txt')
 
// getFileInfo('./node.txt').then((data) => {
//     console.log('File Data:', data)
// })