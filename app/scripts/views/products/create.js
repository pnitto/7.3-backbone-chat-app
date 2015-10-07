var CreateMessageView = Backbone.View.extend({
  template: JST['messages/create'],

  events: {
    'submit form': 'createMessage'
  },

  render: function() {
    this.$el.prepend(this.template());
    return this;
  },

  createMessage: function(e) {
    e.preventDefault();
    var message = this.$('input[name=message]').val();
    var username = this.$('input[name=username]').val();
    this.collection.create({
      message : message,
      username: username
      //username: appRouter.currentUser
      //createdAt: createdAt
    });


    this.$('input').not('[type=submit]').val('');
  }

});

export default CreateMessageView;
