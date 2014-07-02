'use strict';

angular.module('reparacionesFeApp')
  .factory('ShopService', function (halClient, Config) {

    var apiRoot = Config.get('apiroot');
    
    return {
      load: function () {
        return halClient.$get(apiRoot);
      },
      getResource: function (resource, offset) {
        return this.load().then(function (shopResource) {
          return shopResource.$get(resource, {'offset': offset, 'limit': 5});
        }, function (result) {
          console.error('failed', result);
        });
      },
      getCustomersResource: function (offset) {
        return this.getResource('customers', offset);
      }
    };
  });
