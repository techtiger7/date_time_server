const express = require('express')
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });


app.get("/api/timestamp/:date_string", function(req, res){
  try{
    const date =  new Date(req.params.date_string)
    res.json({"unix": date.getTime(), "utc": date.toUTCString()})
  }
  catch(err) {
    res.json({"error": "Invalid Value"})
  }
})

app.get("/api/timestamp", function(req, res){
  const date = new Date()
  res.json({"unix": date.getTime(), "utc": date.toUTCString()})
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);