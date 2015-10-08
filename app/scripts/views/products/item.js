var MessageItemView = Backbone.View.extend({

  tagName: 'li',

  template: JST['messages/item'],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render)
  },
  render: function() {
    //var time = moment(this.model.toJSON().createdAt).format('MMMM Do YYYY, h:mm:ss a'));
    this.$el.prepend(this.template(this.model.toJSON()))
    return this;
  }
});

export default MessageItemView;
