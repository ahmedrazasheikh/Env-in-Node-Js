import express from 'express';
const app = express()
import * as dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

app.get('/', (req, res) => {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})