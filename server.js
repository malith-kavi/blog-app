const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

//initializw
app.use(express.json({extended:false}));

//just a test route for now 
app.get("/", (req, res) => res.send("Hello,World!"));
app.post("/", (req, res) => res.send(`Hello, ${req.body.name}`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
