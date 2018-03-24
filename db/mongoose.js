var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://hoangle:hoanglp97@ds157112.mlab.com:57112/my-node-course');
// mongoose.connect(process.env.MONGODB_URI);
//'mongodb: //hoangle:hoanglp97@ds157112.mlab.com:57112/my-node-course'
module.exports = {mongoose};