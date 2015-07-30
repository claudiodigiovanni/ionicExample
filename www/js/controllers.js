angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaGeolocation) {

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat  = position.coords.latitude
                var long = position.coords.longitude
                console.log('lat:' + lat + ' - long:' + long);
            }, function(err) {
                // error
            });

    })

.controller('ChatsCtrl', function($scope, Segnalazioni) {

    var vm = this;


    vm.segnalazioni = Segnalazioni.query(function(){
        
        console.log('xxxxxxxx' );
        
    });
    vm.remove = function(chat) {
        //segnalazioni.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, segnalaz) {
        var vm = this;
        vm.s = segnalaz;
        vm.title = $stateParams.title;
        console.log(vm.s.$resolved);

})

.controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        }
})

.controller('LoginCtrl', function($scope,$state) {
      var me = this;
      me.userCheck = function () {
      'use strict';

      $state.go('tab.dash')

  }
});
