const express = require('express')
const app = express()
const port = 3000
const expressLayout = require('express-ejs-layouts');

const routes = require('./routes/route.js');

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(expressLayout);

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})