/**
 * Created by cuong on 03/08/2016.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    var app = angular.module('admin', ['ngWebsocket']);

    app.controller("tableStatics", function($scope, $http, $websocket){
        $scope.rooms = [];
        $scope.allParticipants = 0;
        var init = function(){
            $http({
                method: 'GET',
                url: '/info'
            })
                .success(function(data){
                    console.log('okey data = ',data);
                    $('.rooms-list').remove();
                    var temp = JSON.parse(data);
                    for ( var i = 0; i <  temp.length; i++){
                        $scope.rooms[i] = {};
                        $scope.rooms[i].numer = i+1;
                        $scope.rooms[i].roomName = temp[i].roomName;
                        $scope.rooms[i].numberOfUser = temp[i].numberOfUser;
                    }
                })
                .error(function(error){
                    console.log('f* err= ', error);
                });
        };

        window.setInterval(init, 2000);
        var ws = $websocket.$new('wss://' + location.host + '/groupcall');
        window.onbeforeunload = function() {
            ws.close();
        };
        ws.onmessage = function(message) {
            var parsedMessage = JSON.parse(message.data);
            console.info('Received message: ' + message.data);
            if (parsedMessage.id != '') {
                init();
            }
        }

    });
});
