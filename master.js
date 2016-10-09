module.exports = () => {

  const config = require('./config');

  const opts = {
      init: (osnova) => { console.log('Hello. I am init master func.'); },
      start: (osnova) => { console.log(`Open ${config.launcher.host.ip}:${config.launcher.host.port} in your browser!`); },
      core: require('./config').core,
      master: true
  };

  const OSNOVA = require('osnova');
  const osnova = OSNOVA.Server(opts);
  osnova.start();
}