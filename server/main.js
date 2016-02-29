
/// Redirection 
Router.route( "/:_id", function() {

    var urlObj = URLs.findOne({_id : this.params._id});
    if(!urlObj)
    {
        this.response.statusCode = 200;
        this.response.end("Cant find it");
        return;
    }

    console.log(urlObj);

    var url = urlObj.url;
    var idx = url.search("://");
    if(idx > 0)
    {
        url = url.substring(idx+3, url.length);
    }
    console.log(url);
    this.response.writeHead(301, {'Location': "http://" + url});
    this.response.end();  

}, { where: "server" });