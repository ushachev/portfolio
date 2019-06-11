const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(60000);

beforeAll(() => {
    return client.init().url('http://localhost:3000');
});

test('на странице есть кнопка "авторизация"', () => {
    return client
        .isExisting('.auth-btn')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`screenshots/auth_${browserName}_exist.png`, browsers[browserName].value, 'base64');
            }
        });
});

afterAll(() => {
    return client.end();
});
