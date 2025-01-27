
const express = require('express');
const app = express.Router();
const City = require('../models/City');
const postCity = async(req, res)=>{
    try {
        const { name, } = req.body;
        const city = new City({ name,  });
        await city.save();
      return  res.status(201).json({
          "msg": "success",
          "data": "data",
  
      });
      } catch (error) {
        res.status(400).json({msg:error.message});
      }
}


const getCity = async(req,res)=>{
    try{
        const{name,}= req.body;
        let data = await City.find();
        return res.status(201).json({
            "msg":"success",
            "data":data,
        });
    }catch(error){
        res.status(400).json({msg:error.message});
    }
}

module.exports = {
    postCity,getCity
}