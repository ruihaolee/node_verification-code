var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var verificationCode = require('./routes/verificationCode');
var goVerification = require('./routes/goVerification');

var app = express();
app.use(cookieParser());
app.use(session({
	secret : '12345',
	name : 'verCode_sessionId',
	cookie : {maxAge : 8000000}, //设置cookie最大时长
	resave : true,
	saveUninitialized: false
}));

app.use('/verificationCode', function (req, res){
	verificationCode(req, res);
});
app.use('/goVerification', function (req, res){
	goVerification(req, res);
});
app.listen(5964);
