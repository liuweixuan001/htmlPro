const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const port = process.env.PORT;

app.use(serve(__dirname + '/'));
app.listen(port);

console.log('listening on port ' + port);