import fs from 'fs';
import path from 'path'

type callBack = (data: any) => number
function getData(cb: callBack) {
    const data = {
        user: "Rotem",
        agent: 24
    }
    setTimeout(() => {
        cb(data);
    }, 5000)
}

test('test callback function MUST be with the done keyword', (done) => {
    const cb = (data: any) => {
        expect(data).toEqual({
            user: "Rotem",
            agent: 24
        })
        // till Done is not called the test will not end
        done();
        return 3;
    };
    getData(cb);
});

test('getting the right data from fs callback', (done) => {
    const filepath = path.join(__dirname, 'new_data.txt');
    fs.readFile(filepath, (err, data) => {
        if (err) {
            done(err);
        }
        const text = data.toString();
        expect(text).toBe('Hello World!');
        // till Done is not called the test will not end
        done();
    });
});
