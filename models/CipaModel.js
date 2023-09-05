const mongoose = require('mongoose');


const CipaSchema = new mongoose.Schema({
	company_name: {type: String},
	company_cipa: {type: String},
	company_directors:[
		{
   
        fullname: {type: String},
        nationality: {type: String},
        percent_own: {type:String},
        identity_attachment:{type: String},
        Postal_address: {type: String},
        physical_address: {type: String}
   
}]
}, {timestamps: true});

module.exports = mongoose.model('Cipa', CipaSchema);