const target = {
  database: {
    uri: 'mongodb://localhost/osnovabasicapp'
  }
};

const paths = {
  root: require('path').resolve(__dirname)
};

module.exports = {};

module.exports.core = {
  paths: paths,
  target: target
};

module.exports.launcher = {
  threads: 3,
  host: { ip: 'localhost', port: 3337 }
};