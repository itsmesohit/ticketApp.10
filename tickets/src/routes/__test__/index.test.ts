import request from 'supertest';
import { app } from '../../app';

// Make sure to import the global setup before running tests
import '../../globalSetup';

it('can fetch a list of tickets', async () => {
  // Await the global.signin() function
  const cookie = await global.signin();

  await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'concert',
      price: 20,
    })
    .expect(201);

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(1);
  expect(response.body[0].title).toEqual('concert');
  expect(response.body[0].price).toEqual(20);
});
