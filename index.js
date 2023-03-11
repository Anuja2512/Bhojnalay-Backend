const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors({origin: '*'}));

app.get('/', async(req, res)=>{
  return res.json({
    message: "Bhojnalay Backend"
  });
});

app.listen(5002, ()=>{
  console.log("Server Started: http:localhost:5002")
});