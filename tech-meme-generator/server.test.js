const request = require('supertest');
const app = require('./server');

describe('GET /meme', () => {
  it('should return a random meme', async () => {
    const response = await request(app).get('/meme');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('meme');
    expect(typeof response.body.meme).toBe('string');
  });

  it('should handle errors gracefully', async () => {
    // Simulate an error scenario if applicable
    // Example: Mock a function to throw an error
    jest.spyOn(Math, 'random').mockImplementation(() => {
      throw new Error('Random error');
    });

    const response = await request(app).get('/meme');
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');

    // Restore the original implementation
    Math.random.mockRestore();
  });
});
