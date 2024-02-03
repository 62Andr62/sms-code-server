let inMemoryDataBase;
const random = function() {
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};
function smsCreate (ctx) {
  const sms = random()
  inMemoryDataBase = sms
  ctx.response.body = sms
  ctx.response.set('content-type','application/json')
  ctx.response.status = 200
}



function checkSms (ctx) {
    ctx.response.set('content-type','application/json')
    if (String(inMemoryDataBase) === ctx.request.body.login) {
        ctx.response.status = 200;
    } else {
        ctx.response.status = 400
    }
}

  module.exports.smsCreate = smsCreate;
  module.exports.checkSms = checkSms;