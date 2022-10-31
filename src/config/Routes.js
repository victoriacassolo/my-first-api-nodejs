const Router = require('express').Router();
const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = app => {
  app.use(Router);
  readdirSync(join(__dirname, '../routes'), { withFileTypes: true }).forEach(file => {
    if (!file.isFile()) { return; }
    require(`../routes/${file.name}`)(Router);
  });
};
