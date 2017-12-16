var koa = require('koa');
var app = new koa();
console.log("fafa")
app.use(function(cxt, res){
//debugger;
	//await next();
	//cxt.response.text="text/html";
	//cxt.response.body="wangnn third";
})

app.listen(8090)
console.log('app started at port 8090...');