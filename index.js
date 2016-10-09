const launch = require('osnova').launch;

launch({
  worker: require('./worker.js'),
  master: require('./master.js'),
  config: require('./config.js').launcher
});