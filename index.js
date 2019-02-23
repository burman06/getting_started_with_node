/*
    Express in a module or a framework build on the top of node.js
    Express provides a minimal interface to build our applications. 
    It provides us the tools that are required to build our app.
    It is flexible as there are numerous modules available on npm,
    which can be directly plugged into Express.
*/

const express = require('express')

const app = express()
const port = 3000

const helloRoutes = require('./routes/index');

app.use('/', helloRoutes);

app.listen(3000)