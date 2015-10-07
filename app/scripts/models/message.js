var Message = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function(){
    return {
      message: "",
      username: "",
      createdAt:Date.now()
    }
  }
});

export default Message;
