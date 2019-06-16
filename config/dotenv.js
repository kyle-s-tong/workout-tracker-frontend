module.exports = function(env) {
    return {
      clientAllowedKeys: ['API_HOST'],
      // Fail build when there is missing any of clientAllowedKeys environment variables.
      // By default false.
      failOnMissingKey: false,
    };
  };
