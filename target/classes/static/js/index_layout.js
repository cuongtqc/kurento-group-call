/**
 * Created by Tran on 9/21/2016.
 */
$(document).ready(function(){
    //Hide navigation bar
    setTimeout(function(){
        $('#navigation').animate({'padding':'0px'}, 500)
    }, 3000);
    $('#body').css('position','relative').css('top','-40px')
    $('#footer').css('padding', '10px')
});
