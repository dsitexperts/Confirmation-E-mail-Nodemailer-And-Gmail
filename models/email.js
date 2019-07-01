var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var emailSchema = new Schema ({
	email:String
})
var email = mongoose.model('email' , emailSchema)