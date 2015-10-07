var User = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: {
  username: "",
  }
});

module.export = User;
