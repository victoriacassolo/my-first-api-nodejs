const express = require('express');
const Routes = require('./Routes');

const App = express();

Routes(App);

module.exports = App;
