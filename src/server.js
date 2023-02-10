const gracefulShutdown = require('http-graceful-shutdown');

const database = require('./infra/Database');
const { PORT, DB_URI, NODE_ENV } = require('./config/Environments');

database.open(DB_URI).then(() => {
  const App = require('./config/App');
  const server = App.listen(PORT, () => console.log(`Listening at http://[::]:${PORT} on ${NODE_ENV} mode.`));
  gracefulShutdown(server);
}).catch((error) => {
  console.log(error);
});
