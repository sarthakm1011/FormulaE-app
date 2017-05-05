angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope) {
     $scope.logo = "<img class='logo-header' src='img/logo.png' height=36 width=90>";
    
     $scope.goWashroom = function(){
        
        //launching the app by navigation is simple usage 
        launchnavigator.navigate("London, UK", {
            //start: "Manchester, UK"
            //when start is not specified then it will take the current location
        }); 
        
        //launching the application but checking before first everything if app available 
        launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function(isAvailable){
            var app;
            if(isAvailable){
                app = launchnavigator.APP.GOOGLE_MAPS;
            }else{
                console.warn("Google Maps not available - falling back to user selection");
                app = launchnavigator.APP.USER_SELECT;
            }
            launchnavigator.navigate("London, UK", {
                app: app
            });
        });
        
        //checking the platform of the device 
        var platform = device.platform.toLowerCase();
        if(platform == "android"){
            platform = launchnavigator.PLATFORM.ANDROID;
        }else if(platform == "ios"){
            platform = launchnavigator.PLATFORM.IOS;
        }
         
         //List all of the apps supported by the current platform
         launchnavigator.getAppsForPlatform(platform).forEach(function(app){
            console.log(launchnavigator.getAppDisplayName(app) + " is supported");
        });
         
         //List apps available on the current device
         launchnavigator.availableApps(function(results){
            for(var app in results){
                console.log(launchnavigator.getAppDisplayName(app) + (results[app] ? " is" : " isn't") +" available");
            }
        });
    };
         
    
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
   $scope.logo = "<img class='logo-header' src='img/logo.png' height=36 width=90>";
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.logo = "<img class='logo-header' src='img/logo.png' height=36 width=90>";
})

.controller('AccountCtrl', function($scope,$ionicLoading) {
  $scope.settings = {
    enableFriends: true
  };
    
    $scope.logo = "<img class='logo-header' src='img/logo.png' height=36 width=90>";
    
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
    
})

.controller('driverCtrl', function($scope) {
    $scope.logo = "<img class='logo-header' src='img/logo.png' height=36 width=90>";
    
})

.controller("mapController",function($scope){
    
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
    
});