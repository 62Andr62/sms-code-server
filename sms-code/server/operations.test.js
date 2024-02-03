const assert = require('assert');
const { smsCreate } = require('./operations');
const { checkSms } = require('./operations');

describe('API tests', function() {
  it('should create sms', function() {
    let ctx = {
      response: {
        body: '',
        set: function() {},
        status: 0
      }
    };

    smsCreate(ctx);

    assert.strictEqual(ctx.response.status, 200);
  });
});


describe('API tests', function() {
    it('should check sms', function() {
       let inMemoryDataBase;
       let ctx;
    if(inMemoryDataBase ===  ctx.request.body.login) {
        ctx.response.status = 200; 
    }
    checkSms(ctx);
      assert.strictEqual(ctx.response.status, 200);
    });
  });

