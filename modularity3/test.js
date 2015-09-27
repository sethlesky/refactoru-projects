var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

var relieveDuty = function(vehicle, day) {
  var offDuty = [];
  var onDuty = [];
  var index = vehicle.numRangers;
  for (var i = 1; i <= index; i++) {
    if (vehicle['ranger'+i].dayOff === day) {
      offDuty.push(vehicle['ranger'+i]);
      vehicle.numRangers--;
    } else {
      onDuty.push(vehicle['ranger'+i]);
    }
    delete vehicle['ranger'+i];
  }
  
  console.log(vehicle);
  return offDuty;
};

relieveDuty(vehicle3, "Friday");
console.log(vehicle3);

