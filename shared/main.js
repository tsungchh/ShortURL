
var id = 0;

// method definitions
Meteor.methods({
  // adding new comments
  addURL:function(url){
    console.log(url);
    var record = { url:url };
    var id = URLs.insert(record);
    return id;
  }, 

})