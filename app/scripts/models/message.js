var Message = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function(){
    return {
      message: "",
      username: "",
      createdAt:Date.now()
    }
  },
  validators:function(attrs){
  //I want to display a picture if the input type is a url
    if(attrs.message){}

  }
});

export default Message;
