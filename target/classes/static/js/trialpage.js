/**
 * Created by Tran on 9/25/2016.
 */
$(function(){
    var socket = io.connect('https://webrtc2016.herokuapp.com');
    var $messageForm = $("#chat-input > input[type='submit']");
    var $message = $('#message');
    var $chat = $('#chat-content');
    var $users = $('#users');
    var $error = $('#error');

    socket.emit('new user', window.timestamp, function(data){
        if (data) {
        } else {
            $error.html('Username is already taken.');
        }
    });

    socket.on('usernames', function(data){
        var html = '';
        for(i = 0; i< data.length; i++){
            html+= data[i] + '<br>';
        }
        $users.html(html);
    });

    $messageForm.click(function(e){
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });

    socket.on('new message', function(data){
        $chat.append('<strong>'+data.user + ':</strong>' + data.msg+'<br>');
    });
});