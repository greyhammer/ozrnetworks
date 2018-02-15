const deploymentRoutes  = require('./deployment_routes');

module.exports = function(app, sh) {
  deploymentRoutes(app, sh);

};
