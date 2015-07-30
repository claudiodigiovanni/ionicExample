var express = require('express');
var faker = require('faker');
var bodyParser = require ('body-parser');
var restful = require('node-restful');
var cors = require ('cors')

var mongoose = restful.mongoose;




var app = express();

app.use(cors());
app.use (bodyParser.json());

var url = 'mongodb://root:root@ds047772.mongolab.com:47772/mymongodb'
mongoose.connect(url);

var Post = app.resource = restful.model('post', mongoose.Schema({
    title: String,
  }))
  .methods(['get', 'post', 'put', 'delete']);
 
Post.register(app, '/api/post');







app.listen ('3000', function (){

	console.log('listening on port 3000....');
}) 