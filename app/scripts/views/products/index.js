import MessageItemView from 'views/products/item';
import CollectionView from 'views/collection-view';
import MessageCreateView from 'views/products/create';

var MessageCollectionView = CollectionView.extend({
  tagName: 'ul',
  ItemViewConstructor: MessageItemView
});

var MessageIndexView = Backbone.View.extend({
  initialize: function() {
    this.collectionView = new MessageCollectionView({
      collection: this.collection
    });

    this.MessageCreateView = new MessageCreateView({
      collection: this.collection
    });
  },
  render: function() {
    this.$el.html(this.collectionView.render().el);
    this.$el.prepend(this.MessageCreateView.render().el);
    return this;
  },
  remove: function() {
    this.collectionView.remove();
    this.MessageCreateView.remove();
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});

export default MessageIndexView;
