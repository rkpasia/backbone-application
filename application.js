$(function(){
  var AppView = Backbone.View.extend({
    el:'#app-container',
    events: {
      "click" : "change"
    },
    template: _.template("<h1>Hello <%= who %> </h1>"),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(this.template({who: 'Riccardo'}));
    },
    change: function(){
      var m = new Thumbnail(this.template({who: 'James'}));
      this.$el.append(m.get("message"));
    }
  });

  var Thumbnail = Backbone.Model.extend({

    defaults: {
      "message" : "No message here"
    },

    initialize: function(message){
      this.set("message", message);
    }
  });

  var app = new AppView();
});
