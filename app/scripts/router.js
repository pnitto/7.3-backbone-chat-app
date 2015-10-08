import MessageCollection from 'models/message-collection';
import MessageIndexView from 'views/products/index';
import User from 'models/user';



var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare',
  },
  events: {
    'index': 'fetch'
  },
  initialize: function() {
    $('#container').html(JST['application']());
    this.messages = new MessageCollection();
    return this;
    //this.currentUser = prompt("What is your username?");
  },
  index: function() {
    var view = new MessageIndexView({
      collection: this.messages
    });
    var data = this.messages;
    var timer = function(){
      data.fetch({add:true});
    setTimeout(timer,3000);
    };
    timer();
    this.showView(view);
  },

    //this.messages.fetch();
  compare: function() {
    console.log('route:compare');
  },

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  }

});

export default AppRouter;
