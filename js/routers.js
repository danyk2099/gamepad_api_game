var myRouter = Backbone.Router.extend({

    routes : {
        "" : "funcOne",
        "somelink" : "funcTwo",
        "somelink/:varItem" : "funcThree"
    },

    funcOne : function(){
        $('#mainContent').html('Nothing in link!');
    },

    funcTwo : function(){
        $('#mainContent').html('SOMETHING in link!');
    },

    funcThree : function(item){       //item is passed the value of varItem
        $('#mainContent').html('The link is: ' + item);
    }

});

var myRouteInstance = new myRouter();

$(document).ready(function(){

    Backbone.history.start();

});