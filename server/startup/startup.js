if (Meteor.isServer) {
  Meteor.startup(function() {
    if (Meteor.users.findOne({ "emails.address" : 'YourEMAILHERE' } )){
      var adminUser = Meteor.users.findOne({ "emails.address" : 'YourEmailHERE' });
      Roles.setUserRoles(adminUser, 'admin');

}
  });
}
