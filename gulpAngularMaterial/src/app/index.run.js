(function() {
  'use strict';

  angular
    .module('inspireQuotes')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
