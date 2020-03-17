const http = require('http');
const server = http.createServer();
server.on('connection', (socket) => {
    console.log('session opened!')
})
server.listen(3000);
console.log('started server 3000');