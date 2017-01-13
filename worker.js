module.exports = () => {
  
  const opts = {
      start: (osnova) => {
        const app = osnova.express;
        app.get('/', (req, res) => {
          res.send(') ooo o oo ooo  o');
        });
        console.log('And I am worker start func!');
      },
      core: require('./config').core
  };

  const OSNOVA = require('osnova');
  const osnova = OSNOVA.Server(opts);
  osnova.start();
}