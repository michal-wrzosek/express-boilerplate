import { expect } from 'chai';
import request from 'supertest';

import { getApp } from 'src/app';

describe('/api/v1/test', () => {
  it('works', async () => {
    const app = getApp();
    const res = await request(app).get('/api/v1/test');
    const { ok } = res.body;
    expect(res.status).to.equal(200);
    expect(ok).to.equal(true);
  });
});
