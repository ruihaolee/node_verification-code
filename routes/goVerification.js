var checkVerCode = function (req, res){
	if (req.session.verCode) {
		console.log(req.query.verCode);
		if (req.query.verCode == req.session.verCode) {
			res.jsonp({
				result : true,
				reason : '验证正确'
			});
		}
		else{
			res.jsonp({
				result : false,
				reason : '验证码错误'
			});
		}
	}
};

module.exports = checkVerCode;