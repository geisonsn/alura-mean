module.exports = function(app) {

	var api = app.api.auth;

	app.post("/autenticar", api.autentica);
	app.use("/*", api.verificaToken);//definido com app.use, pois deve ser verificado para qualquer verbo: post, get, delete, put
};