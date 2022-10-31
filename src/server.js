const { PORT, NODE_ENV } = require('./config/Environments');
const gracefulShutdown = require('http-graceful-shutdown');

try {
  const App = require('./config/App');
  const server = App.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT} on ${NODE_ENV} mode`);
    gracefulShutdown(server);
  });
} catch (error) {
  console.log(error);
}
