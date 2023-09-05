const mongoose = require('mongoose');
const Cipa = require('../models/CipaModel');


const registercipa = async(req, res)=>{


	const {company_name, company_cipa, company_directors} = req.body;

	try{
		const createone = await Cipa.create({
		company_name: company_name,
		company_cipa: company_cipa,
		company_directors: company_directors
	});
		res.json(createone);
	}catch(e){

		throw new Error(e);
	}


}



const findcipa = async(req, res)=>{
  const {company_cipa} = req.body;
  console.log(req.body);
  try{

  const findcompany = await Cipa.findOne({company_cipa: company_cipa});

  res.json(findcompany);

  }catch(e){
  	throw new Error(e);
  }
}



module.exports ={registercipa, findcipa};