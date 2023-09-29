const assert = require('assert');
const app = require('../../src/app');

describe('\'klCampusCsv\' service', () => {
  it('registered the service', () => {
    const service = app.service('klCampusCsv');

    assert.ok(service, 'Registered the service (klCampusCsv)');
  });
});
