const deploymentRoutes  = require('./deployment_routes');
const socketRoutes      = require('./socket_routes.js');

module.exports = function(app, sh, io) {
  deploymentRoutes(app, sh);
  socketRoutes(io);

};
