const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.send("lets battle")
});
	
app.post('/', function (req, res) {
  console.log('req= ',req.body);
  console.log('enemy == ',req.body.state)
  const moves = ['F', 'T', 'L', 'R'];
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
