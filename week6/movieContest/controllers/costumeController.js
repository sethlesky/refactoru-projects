var costumeModel = require('../models/costumes.js');

// Export so we can access methods in app.js
module.exports = {

	createCostume : function(req, res){
		// Use req.body to create a new costume
		var costume = new costumeModel.Costume(req.body)
		console.log(costumeModel.allCostumes)

		res.send(costumeModel.allCostumes)

	},

	getCostumes : function(req, res){
		res.send(costumeModel.allCostumes)
	}

}
