$(function(){

    $('#myButt').click(function(){

        $.ajax({
            url : 'index.php',
            data: {'fName' : 'Dany'},
            type : 'POST'
        }).done(function(serverRes){
                alert(serverRes);
            });


    });

});