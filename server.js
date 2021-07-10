const express = require('express');
const app = express();
const PORT = 3001;
const HOST = 'http://127.0.0.1:';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.listen(PORT, 'localhost',() => {
    console.log(`Open ${HOST}${PORT} \n Click Ctrl+C for stop server`);
});

// const arr = [4, 5, 1, 3, 8];

// const res = arr.reduce((sum, current) => sum + current)



// const obj = {
//     aaa: 'persoane',
//     bbb: 'lol',
//     ccc: 'persoane'
// }

// const res = Object.entries(obj).filter(item => item[1] == 'persoane').map(item => item[0])
// console.log(res);