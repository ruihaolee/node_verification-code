var ccap = require('ccap');
var captcha = ccap({
	width : 256,	//宽度
	height : 60,	//高度
	offset : 40,	//间隔
	quality : 100	//质量
});
var changeVerCode = function(req, res){
	var captchaArr = captcha.get(); //生成新的验证码
	var captchaText = captchaArr[0], 
		captchaBuffer = captchaArr[1];	
	req.session.verCode = captchaText;
	res.end(captchaBuffer);
}
module.exports = changeVerCode;

