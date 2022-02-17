const http = require("http");//загрузка модуля
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {//прослушиватель, объект запроса и ответа
	res.writeHead(200);
	res.end("My first server!");//записывает ответ HTTP на клиент
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});