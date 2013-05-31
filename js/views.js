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

        var myView = new ExtView({
            "picName" : "Dany in a picture",
            "picExtension" : "PNG"
        });

       $('#mainContent').html(myView.render().el);
    }

});

var myRouteInstance = new myRouter();

$(document).ready(function(){

    Backbone.history.start();

});
