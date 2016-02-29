// set up the iron router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// 'home' page
Router.route('/', function () {
  console.log("you hit / ");
  this.render("header", {to:"header"});
  this.render("url_input", {to:"url_input"});
  this.render("arrow", {to:"arrow"});  
  this.render("url_output", {to:"url_output"});  
});


///
// helper functions 
/// 

Template.url_input.helpers({
  
  messages:function(){
  }, 

  other_user:function(){
  },

})

Template.url_output.helpers({
  
  url:function(){
      var id = Session.get("urlId");
      // var url = URLs.findOne({_id:id});
      if(id) 
          return "osoo.meteor.com/" + id;
      else
          return "";
  },

})


///
// event functions 
///

Template.url_input.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-send-url':function(event){
    // stop the form from triggering a page reload
      event.preventDefault();
      var str = event.target.url.value;
      Meteor.call("addURL", str, function(err, res){
          if(err)
          {
            console.log("Unable to add url.");
          }
          console.log("event callback received id: "+res);
          Session.set("urlId", res);  
      });
  }
})


Template.url_output.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-go-url':function(event){
    // stop the form from triggering a page reload
      event.preventDefault();
      console.log("test");
      window.location = Session.get("urlId");
  }
})

