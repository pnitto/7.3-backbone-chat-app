import MessageCollection from 'models/message-collection';
import MessageIndexView from 'views/products/index';
import User from 'models/user';



var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare',
  },

  initialize: function() {
    $('#container').html(JST['application']());
    this.messages = new MessageCollection();
    //this.currentUser = prompt("What is your username?");
  },

  index: function() {
    var view = new MessageIndexView({
      collection: this.messages
    });
    this.messages.fetch();
    this.showView(view);
  },

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
