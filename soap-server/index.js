var http = require('http')
var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
var soap = require('soap')
const PORT = 8080

var myService = {
    SoapWebService: {
        SoapWebService_01: {
            HelloWorld: function(args) {
                return {
                    HelloWorld
                };
            }
        }
    }
};

//http server example
var server = http.createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(PORT);
soap.listen(server, '/wsdl', myService, xml);
console.log('Server started on: ' + PORT + " -try on : http://localhost:8080/wsdl?wsdl")