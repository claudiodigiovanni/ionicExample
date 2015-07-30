var service1 = angular.module('starter.services', ['ngResource']);


service1.factory('Segnalazioni',Segnalazioni);

function Segnalazioni ($resource) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var segnalazioni = $resource("http://localhost:3000/api/post/:_id", {_id:'@_id'});
  return segnalazioni;

}

