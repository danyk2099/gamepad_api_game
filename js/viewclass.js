var ExtView = Backbone.View.extend({

    render : function(){
        var myStruct = "<div>" + this.options.picName + "</div>";

        this.$el.html(myStruct);

        return this;
    }

});