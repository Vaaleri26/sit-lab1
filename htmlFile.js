const http = require("http");
const fs = require('fs').promises;


const host = 'localhost';
const port = 8000;
let indexFile;

const requestListener = function (req, res) {res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(indexFile);//не загружает файл,а выводит его содержимое переменной
}
       };

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
	.then(contents => {
	  indexFile = contents;//при успешном запуске , данные запишутся в переменную индексфайл
	  server.listen(port, host, () => {
	    console.log(`Server is running on http://${host}:${port}`);
	  });
	})
	.catch(err => {
	  console.error(`Could not read index.html file: ${err}`);//записываем ошибку и выводим в консоль
	  process.exit(1);//без запуска сервера
	});
