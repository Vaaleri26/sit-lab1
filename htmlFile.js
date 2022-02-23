const http = require("http");
const fs = require('fs').promises;


const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
s.readFile(__dirname + "/index.html")//fs.readFile() для загрузки файла,__dirname путь,/index.html, для загрузки данного файла
	.then(contents => {//then() возвращает данные при успещном выполнении ,contents содержит эти самые данные
		res.setHeader("Content-Type", "text/html");
		res.writeHead(200);
		res.end(contents);// отправляем на клиент данные
	}
)
.catch(err => {// при ошибке 
	res.writeHead(500);
	res.end(err);
	return;
}
       };

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
