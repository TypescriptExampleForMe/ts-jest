import fs from 'fs'

export function readFileData(pathName: string) {
    const data = fs.readFileSync(pathName);
    return data.toString();
}

export function checkIsFile(pathName: string) {
    const state = fs.statSync(pathName);
    return state.isFile;
}

export function throwPerType(errType: number) {
    throw new Error(`Myy Error ${errType}`);
}

export function functionReturningPromise() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => resolve(1), 30);
    });
}

export function readFileDataPromise(pathName: string): Promise<string> {
    const fsPromises = require('fs').promises;
    return fsPromises.readFile(pathName).then((data: Buffer) => data.toString());
}


