module.exports = function() {
    return {
      clientAllowedKeys: ['API_HOST', 'API_NAMESPACE'],
      // Fail build when there is missing any of clientAllowedKeys environment variables.
      // By default false.
      failOnMissingKey: false,
    };
  };
