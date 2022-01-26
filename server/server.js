var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())

var todos = [];

app.post('/create', (req, res) =>
todos.push(req.body.newTodo)
)

app.get('/', (req, res) => {
  res.send(todos)
})
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});