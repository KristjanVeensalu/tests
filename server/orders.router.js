const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");


router.post("/", (req,res) =>{

	const item1 = new Item(props);
	item1.save( err => {
		if(err){
			console.log("Error", err);
			res.send(500);
			return;
		}
		console.log("Success create");
		res.send(201);
	});
});




//router.get("/", async (req, res)=>{
//  const xs = await Order.find({});
//  res.send(xs);
//});

module.exports = router;

