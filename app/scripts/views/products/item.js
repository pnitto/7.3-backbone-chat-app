var MessageItemView = Backbone.View.extend({

  tagName: 'li',

  template: JST['messages/item'],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render)
  },
  render: function() {
    var info = this.model.toJSON()
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default MessageItemView;
