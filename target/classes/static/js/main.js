/**
 * Created by cuong on 03/08/2016.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    var app = angular.module('admin', ['ngWebsocket']);

    app.controller("tableStatics", function($scope, $http, $websocket){
        $scope.rooms = {};
        $scope.allParticipants = 0;

        var init = function(){
            $http({
                method: 'GET',
                url: '/info',
                data: {}
            })
                .then(function(data){
                    $scope.rooms = angular.fromJson(data);
                    // $scope.allParticipants = data.length;
                    console.log('okey data = ',data);
                })
                .catch(function(error){
                    console.log('f* err= ', error);
                });
        };

        var ws = $websocket.$new('wss://' + location.host + '/groupcall');
        window.onbeforeunload = function() {
            ws.close();
        };
        ws.onmessage = function(message) {
            var parsedMessage = JSON.parse(message.data);
            console.info('Received message: ' + message.data);
            if (parsedMessage.id == 'existingParticipants' ||
                parsedMessage.id == 'newParticipantArrived' ||
                parsedMessage.id == 'participantLeft' ||
                parsedMessage.id == 'receiveVideoAnswer' ||
                parsedMessage.id == 'iceCandidate'
            ) {
                //  update all statics info

            }
        }

    });
});
