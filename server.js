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
    const date = (Object.keys(req.params).length === 0) ? new Date() : new Date(req.params.date_string)
    res.json({"unix": date.getTime(), "utc": date.toUTCString()})
  }
  catch(err) {
    res.json({"err": err})
  }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);