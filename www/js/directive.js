angular.module('starter.directive', [])
    .directive('map', function($cordovaGeolocation) {
        return {
            restrict: 'A',
            link:function(scope, element, attrs){

                var zValue = 15;
                var lat = 40;
                var lng = 10;

                var posOptions = {timeout: 10000, enableHighAccuracy: false};
                $cordovaGeolocation
                    .getCurrentPosition(posOptions)
                    .then(function (position) {
                         lat  = position.coords.latitude
                         lng = position.coords.longitude
                        console.log('lat:' + lat + ' - long:' + lng);
                        var myLatlng = new google.maps.LatLng(lat,lng),
                            mapOptions = {
                                zoom: zValue,
                                center: myLatlng
                            },
                            map = new google.maps.Map(element[0],mapOptions),
                            marker = new google.maps.Marker({
                                position: myLatlng,
                                map: map,
                                draggable:true
                            });
                    }, function(err) {
                        // error
                        console.log('errore google map');
                    });







            }
        };
    });