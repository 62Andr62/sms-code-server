const mount = require('koa-mount');
const cors = require('@koa/cors');
const Koa = require('koa');
const { bodyParser } = require("@koa/bodyparser");
var sinon = require("sinon");
const app = new Koa();
app.use(cors())
app.use(bodyParser());

// response


//  create API point 

let inMemoryDataBase;

//create random number
const random = function() {
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};
//create sms
function smsCreate (ctx) {
  const sms = random()
  inMemoryDataBase = sms
  ctx.response.body = sms
  ctx.response.set('content-type','application/json')
  ctx.response.status = 200
}

//check sms

function checkSms (ctx) {
  ctx.response.set('content-type','application/json')
  if (String(inMemoryDataBase) === ctx.request.body.login) {
     ctx.response.status = 200;
} else {
  ctx.response.status = 400
}
}


app.use(mount('/sms/create', smsCreate));
app.use(mount('/sms/check', checkSms));
app.listen(3000);