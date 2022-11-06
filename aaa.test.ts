import { readFileData, checkIsFile, throwPerType, functionReturningPromise, readFileDataPromise } from "./aaa";
import path from 'path'

test('simple expects', () => {
    expect(2 - 2).toBe(0);    // checks ===
    expect(2 - 2).toBeLessThan(1);

    expect([1, 2, 3]).toEqual([1, 2, 3]); // toEqual for arrays and objects to verify content
    expect([1, 2, 3]).not.toBe([1, 2, 3]); // checks if it the same object same address

    expect({ firstName: "IDa" }).toEqual({ firstName: "IDa" });
    expect({ firstName: "IDa" }).not.toBe({ firstName: "IDa" }); // checks if it the same object same address

    expect(1).not.toBeNaN();
    expect(NaN).toBeNaN();
    expect(undefined).toBeUndefined();
    expect([1, 2, 3]).toContain(3);    // toContain for arrays
    expect('Hello World!').toContain('Hell'); // toContain for strings
    expect('Hello World!').toMatch(/^Hello [a-zA-Z]{2}rld!$/g);
})

test('test sync function', () => {
    const filepath = path.join(__dirname, 'new_data.txt')
    expect(readFileData(filepath)).toBe('Hello World!');
    expect(readFileData(filepath)).not.toBe('Hello');
    expect(checkIsFile(filepath)).toBeTruthy();
})

test('test exception', () => {
    expect(() => throwPerType(1)).toThrow('Myy Error 1');
    expect(() => checkIsFile('Not existing file')).toThrow('ENOENT: no such file or directory, stat \'Not existing file\'');
    expect(() => checkIsFile('Not existing file')).toThrow(/^ENOENT.*/g);
})

describe('examples for testing Promise function ', () => {
    // good documentation can be found at 
    // https://jestjs.io/docs/asynchronous
    const filepath = path.join(__dirname, 'new_data.txt')

    test('Promise and increase timeout for one test', () => {
        return functionReturningPromise().then(data => expect(data).toBe(1));
    }, 7000)
    
    test('test function returning Promise', () => {
        return readFileDataPromise(filepath).then(data => expect(data).toBe('Hello World!'));
    })

    test('test Promise 1', async () => {
        const fileContent = await readFileDataPromise(filepath);
        expect(fileContent).toBe('Hello World!');
    });

    test('test Promise 2', async () => {
        await expect(readFileDataPromise(filepath)).resolves.toBe('Hello World!');
    })
})
