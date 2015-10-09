var allCostumes = [];

var Costume = function(costumeData){

	this.name = costumeData.name;
	this.inappropriateness = costumeData.inappropriateness;
	this.missingAccessories = costumeData.accessoriesNotIncluded.split(', ');
	allCostumes.push(this)
}


module.exports = {

	allCostumes : allCostumes,
	Costume     : Costume

}