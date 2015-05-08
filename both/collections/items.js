Items = new Mongo.Collection('items');
Location = new Mongo.Collection('location');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Items.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  description: {
    type: String,
    optional: true,
    max: 1000,
    autoform: {
      type: 'textarea'
    }
  },
  locations:{
    type: [Location],
    optional: true,
  },
  rating: {
    type: Number,
    optional: true,
    allowedValues: [1,2,3,4,5],
    defaultValue: 5,
    autoform: {
      type: 'range',
      min: 1,
      max: 5
    }
  }
}));

Location = new SimpleSchema({
    store: {
        type: String
    }
});
