module.exports = () => {
  
  const opts = {
      init: (osnova) => { console.log('Hello. I am worker init func.'); },
      start: (osnova) => { console.log('And I am worker start func!'); },
      core: require('./config').core
  };

  const OSNOVA = require('osnova');
  const osnova = OSNOVA.Server(opts);
  osnova.start();
}