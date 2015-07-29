angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Segnalazioni) {

    var vm = this;
    vm.segnalazioni = Segnalazioni.all();
    vm.remove = function(chat) {
        segnalazioni.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Segnalazioni) {
        var vm = this;
        vm.s = Segnalazioni.get($stateParams.chatId);
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
