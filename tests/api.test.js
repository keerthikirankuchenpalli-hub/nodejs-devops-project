const request = require('supertest');

const app = require('../src/app.js');

describe('API Tests', () => {
    test('Data API should return 200' , async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toBe(200);

    });

    test('Message API should return 200 and correct message', async () => {
        const res = await request(app).get('/api/message');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBeDefined();
    });
});